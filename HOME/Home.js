


import { Footer } from "../Shard/Footer"
import { Header } from "../Shard/Header"
import { Talktous } from "./Talktous"

function Home(){

    // Home -> parent component
   // Header,footer,talktous,-> child component

    var homemessage=' Home component Sivakanth '



return(
<div className="container">
    <div className="row mp-3 align-items-center">
        <div className="col-12 mb-3">
            <Header/>
            

        </div> <br/>
        <div className=" col-sm-6 mb-4 p-3 ">

            <h1 className="text-center">Learn Real-Time Work & Crack interviews Easily</h1>
            <p className="text-center">Learn in-demand career paths from industry-experts and become job-ready</p>

        </div>
        <div className="col-sm-6 mt-5">
            < Talktous  message={homemessage}/>
            

        </div>
        <div className="col-12 mt-5">
            <Footer/>

        </div>


    </div>

</div>


)

}


export { Home}







