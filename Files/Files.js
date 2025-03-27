import { useState } from "react";
import { Footer } from "../Shard/Footer";
import { Header } from "../Shard/Header";




function Files(){

  let [Files,setFiles]= useState("")

  let [filesError, setfilesError]=useState("")



  


    function hndleFile(data){

        setFiles(data.target.files[0])

    }



   function handleuplod(){
    console.log(Files)

    let filename= Files.name
    let fileArray= filename.split(".")
    let extension= fileArray[fileArray.length -1]


    if ( extension =="png"|| extension =="JPG"){

        setfilesError(" ")
    } else{

        setfilesError(extension +"is not alowd")
    }

    
   let fileZise = Files.zise / (1024 * 1024) // in 1mb

    if(fileZise >=1){
        console.log("on errors")
    } else{
        console.log("Allowed Only 1 MB")
    }
    

   }








   return(
    <div className="container">
        
    <div className="row">
        <div className="col-12">
            <Header/>

        </div>

    </div>

    <div className="row mt-5 mb-5">
        <div className="col-12">
            Files
            <input type="file" placeholder="file" className="form-control" onChange={e => hndleFile(e)}></input>
            
            <div className="mb-5 mt-5">

                <button className=" btn btn-primary" onClick={e => handleuplod(e)}>Uploade Files </button>


            </div>
            <div className="mb-5 mp-5 text-danger">

                {
                    filesError
                }

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


export{Files}














