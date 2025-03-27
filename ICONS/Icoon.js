

import { faShare } from "@fortawesome/free-solid-svg-icons/faShare";

import { Footer } from "../Shard/Footer";
import { Header } from "../Shard/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";





function Usericon (){



    return(

       <div className="container">
         <div className="row mt-5 mb-5s">
            <div className="col-12">
                <Header/>

            </div>

        </div>
            <div className="row">

                <div className="col-12">

                    <h1>hi nani</h1>
                   
                    <div className="mt-2">
                           <div>
                          Share: <h1>< FontAwesomeIcon icon={faShare} /></h1>
                           </div>
                           <div>
                            DElete:<h1><FontAwesomeIcon icon={faTrashCan} /></h1> 
                           </div>
                       
                    </div>
                    

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


export default Usericon

















