import { useState } from "react"
import { useSelector } from "react-redux"

function Header(){


    let counter = useSelector(state => state.counter)
  
    var[navClass,setnavClass] = useState(" collapse  navbar-collapse")

    var isNavShowing =false

    function handleNavToggler(){

        if( isNavShowing == false){

            isNavShowing = true
            setnavClass( "navbar-collapse")


        } else{
            isNavShowing = false
        
            setnavClass(" collapse navbar-collapse")
            

        }


    }
 


   return(


        <nav className="navbar shadow mt-3 navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" >
                    <img src="https://d2b98ifobtd07j.cloudfront.net/logo2.png" width="150px"></img>

                </a>
                <button className="navbar-toggler " onClick={e => handleNavToggler()}>

                       <span className="navbar-toggler-icon"></span>
                 </button>

                <div className={navClass}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link"> Home </a>
                        </li>
                        <li className="nav-item">
                            <a href="/redux" className="nav-link"> Redux  {counter} </a>
                        </li>
                        <li className="nav-item">
                            <a href="/Courses" className="nav-link">Courses</a>

                        </li>
                        <li className="nav-item">
                            <a href="/Login" className="nav-link">Login</a>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/product-list">Product</a>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="readapi">ReadAPI</a>

                        </li>
                       
                        <li className="nav-item">
                            <a className="nav-link" href="userdata">Userdata--Table</a>

                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="userttable">Table-2</a>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/files">Files</a>

                        </li>
                        <li className="nav-item">
                            <a href="/sinup" className="nav-link">Sinup</a>
                        </li>
                        <li className="nav-item">
                            <a href="/apidata" className="nav-link">Apidata</a>
                        </li>

                        <li className="nav-item">
                            <a href="/icoon" className="nav-link">Iconimg</a>
                        </li>
                        <li className="nav-item">
                            <a href="/layoout" className="nav-link">Layout</a>
                        </li>


                    </ul>


                </div>

            </div>
        </nav>


  )


}
 
export { Header}





