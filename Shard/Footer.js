import axios from "axios"
import { useEffect } from "react"









function Footer(){



    

    





    return(
        <div className=" container shadow p-3">

            <footer className="row">
                <div className="col">
                    <img src="https://d2b98ifobtd07j.cloudfront.net/l12.png" width='200px'></img>
                    <br/> <br></br>
                    <p className="mt=4"> learn from industry experts and become job-ready in 6 months</p>


                </div>
                <div className="col">
                    <h5>
                    Company
                    </h5>
                    <ul className="nav flex-column">
                        <li className="nav-item"> <a className="nav-link" href="/About">About</a></li>
                        <li className="nav-item"> <a className="nav-link" href="/career">career</a></li>
                        <li className="nav-item"> <a className="nav-link" href="/Blog">Blog</a></li>


                    </ul>

                </div>
                <div className="col">
                    <h5>Resources</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item"> <a className="nav-link" href="/Refund policy">Refund policy</a></li>
                        <li className="nav-item"> <a className="nav-link" href="/pravecy">pravecy</a></li>
                        <li className="nav-item"> <a className="nav-link" href="/Turms">Turms</a></li>


                    </ul>

                </div>
                <div className="col">
                <h5>Socail Connect
                </h5>
                    <ul className="nav flex-column">
                        <li className="nav-item"> <a className="nav-link" href="/You Tub"> <i className="bi bi-youtube"></i> YouTub</a></li>
                        <li className="nav-item"> <a className="nav-link" href="/Discord"> <i className="bi bi-discord"></i> Discord</a></li>
                        <li className="nav-item"> <a className="nav-link" href="/Linkndin"> <i className="bi bi-linkedin"></i> Linkedin</a></li>
                        <li className="nav-item"> <a className="nav-link" href="/Instagram"><i className="bi bi-instagram"></i> Instagram</a></li>

                        <li className="nav-item"> <a className="nav-link" href="/FaceBook"> <i className="bi bi-facebook"></i>  FaceBook</a></li>
                    </ul>
                </div>
                
                <div className="col">
                    <h5>Contacte</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item"> <a className="nav-link" href="/Vijayawada"><i className="bi bi-geo-alt"></i> Vijayawada</a></li>
                        <li className="nav-item"> <a className="nav-link" href="/Andhrapradesh">Andhrapradesh</a></li>
                        <li className="nav-item"> <a className="nav-link" href="/sivakanth74@gmail.com"><i className="bi bi-envelope-at"></i> sivakanth74@gmail.com</a></li>
                        <li className="nav-item"> <a className="nav-link" href="/9381312845"> <i className="bi bi-telephone-forward"></i> 9381312845</a></li>

                        <li className="nav-item"> <a className="nav-link" href="/Whatsapp"><i className="bi bi-whatsapp"></i> Whatsapp</a></li>
                    </ul>

                    


                </div>



            




            </footer>

            




        </div>
    )
}



export {Footer}




