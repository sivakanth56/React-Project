





import { Footer } from "../Shard/Footer"
import { Header } from "../Shard/Header"
import { useDispatch, useSelector } from "react-redux"
import { increment,decriment } from "../Store/Counter"




  


 

  function DataTest() {

    let counter = useSelector(state => state.counter)
     let Dispatch = useDispatch()


     function handleIncrement (){

        Dispatch ( increment(""))


     }

      function handleDecriment (){

        Dispatch (decriment(""))


      }


    
     return(


        <div className="container">

            <div className="row">
                <div className="col-12 mt-5 mb-5">
                    <Header />

                </div>
            </div>


            <div className="row">
                <div className="col-12 mt-5 mb-5">
                    <h4>Counter</h4>
                    <h3>{counter}</h3>
                     

                    <div>
                        <button className="btn btn-primary me-5" onClick={e => handleIncrement()} >+</button> 
                       
                    </div>
                    <div>
                    <button className="btn btn-danger mt-5" onClick={e => handleDecriment()} >-</button>
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







export default DataTest





