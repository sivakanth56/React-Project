import { Footer } from "../Shard/Footer"
import { Header } from "../Shard/Header"





function  Layout() {




    return(


        <div className="container">

            <div className="row">

                <div className="col-12 mt-5 mb-5">
                    <Header/>

                </div>

            </div> 
            <div className="row mt-5 mb-5">

                <div className="col">

                    <h1 className="bg-primary">Learn Real-Time Work & Crack interviews Easily </h1>

                </div>
                <div className="col-md-7 col-sm-6 bg-success">
                <h1>Learn Real-Time Work & Crack interviews Easily</h1>

                 </div>
                 <div className="col-7 bg-warning">
                <h1>Learn Real-Time Work & Crack interviews Easily</h1>

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




export default Layout
























