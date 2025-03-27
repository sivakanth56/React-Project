

import { useEffect, useState } from "react";
import { Footer } from "../Shard/Footer";
import { Header } from "../Shard/Header";
import axios from "axios";
import { Producte} from "../Product/Productlist";






function Product (){

    let [products,setproducts]=useState([])

    let [noOffcartitem,setNoOffcartitem]=useState(0)


    function updateCard(){

        setNoOffcartitem(noOffcartitem + 1)
    }

    function removeCard(){

        setNoOffcartitem(noOffcartitem - 1)
    }


    useEffect( () =>{

        async function GetProductlist(){

            let ApiResponse =  await   axios.get("https://dummyjson.com/products")


             let data=   ApiResponse.data.products.map(product =>{

                product.is_Fv= false

                return(product)
            })







           setproducts(data)
            

        }

        GetProductlist()
      


    },[])

   








    return(

      <div className="container">

        <div className="row">
            <div className="col-12">
                <Header/>

            </div>

        </div>
           <div className="row mb-5 mt-5">
              <div className="col-12">

                <h4> cart:{noOffcartitem } item</h4>
                

               </div>
               <div className="row">

                 {
                    products.map(product =>(

                        

                            <Producte  product={product} updateCard={updateCard}  removeCard={removeCard}/>
                            


                    

                        
                            
                     ))
                 }


               </div>
                
               

            </div>
            <div className="row">
                <div className="col-12">
                    <Footer/>
                </div>

            </div>


        </div>

    )





}

export { Product}

















