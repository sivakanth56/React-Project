import { Footer } from "../Shard/Footer";
import { Header } from "../Shard/Header";



function List(){


    return(

        <div className="continer">
            <div className="row p-4">
                <div className="col-12 p-3">
                    < Header/>

                </div>
                <div className="col-12">
                    <h1>In-demand courses for quick job</h1>

                </div>
                <div className="-12">
                    < Footer/>

                </div>

            </div>

        </div>
    )
}

export {List}










