import axios from "axios"
import { useState } from "react"



function Login (){

    // use state varible

    var [email,setEmail]=useState("")
    //var [mobil,setMobil]=useState("")

    var [password,setPassword]=useState("")
    



    // use state error varible

    var [emailError,setEMAILError]=useState("")
    //var [mobilError,setMOBILError]=useState("")
    var [passwordError,setPasswordError]=useState("")


    var [ApiErrorMSG,setApiErrorMSG]=useState("")
    var [ApiSuccessMSG,setApiSuccessMSG]=useState("")





    function emailChange(e){
        setEmail(e.target.value)
    }

    /*function mobilChange(e){
        setMobil(e.target.value)
    }*/

    function passwordChange(e){
        setPassword(e.target.value)
    }

    async function loginform(){


        var noOFFError=0

        if(email.length >=6){
            setEMAILError("")

        }else{
            setEMAILError("email not valid")
            noOFFError++
        }

       /*if( mobil.length==10){
            setMOBILError("")


       // }else{
            setMOBILError("mobil number not valid")
            noOFFError++
            
        }*/

        if(password.length >=5){

            setPasswordError("")

        }else{
            setPasswordError("invalid password")
            noOFFError++
        }

        if(noOFFError==0){

          console.log("Call API",noOFFError)

           var ApiInputData={
            'email':email,'password':password

          }
          //console.log(ApiInputData)
         
          try{
            var apiResponss= await axios.post("https://api.softwareschool.co/auth/login",ApiInputData)
             console.log(apiResponss)

             if(apiResponss.data.result=="SUCCESS"){
                setApiSuccessMSG(apiResponss.data.message)
                setApiErrorMSG("")

                console.log(apiResponss.data.data.userId)
                localStorage.setItem('loginid',apiResponss.data.data.userId)



             }else{
                setApiErrorMSG(apiResponss.data.message)
                setApiSuccessMSG("")
             }
           }catch(ex){
            console.log(ex.data)

          }
      
            

            


        }
      


    }







    return(



        <div className="container" >

            <div className="row">

                <div className="col-4 bg-light">

                    <h1 className="mt-3">Login-Form</h1>

                    <div className="mb-3">
                        <label>Email</label>
                        <input type="text" onChange={e => emailChange (e)} className="form-control" placeholder="Email"></input>
                        <div className="text-danger">{emailError}</div>
                    </div>
                    
    
                    <div className="mb-3">
                        Password
                        <input type="password" onChange={e => passwordChange(e)}      className="form-control" placeholder="Password"></input>
                        <div className="text-danger">{passwordError}</div>
                    </div>
                    <div className="mb-3">
                        select cuntry
                        <select className="form-select">
                            <option>india</option>
                            <option>usa</option>
                            <option>uk</option>
                            <option>rusia</option>
                            <option>tailand</option>
                           
                           


                        </select>
                    </div>
                    <div className="mb-3">
                        Fovorite Cricketer
                        <br/>
                        <input type="checkbox" placeholder="box"></input> msdhoni <br/>
                        <input type="checkbox" placeholder="box"></input> virat kohli

                    </div>
                    <div className="mb-3">
                        Gender<br/>
                        <input type="radio" placeholder="mle" name="gender" ></input> male
                        <br/>
                        <input type="radio" placeholder="female"name="gender" ></input> female

                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={e => loginform()}> LOGIN-FORM</button>
                    </div> <br/>
                    <div className="mb-3">
                        <div className="alert alert-primary">
                            {ApiSuccessMSG}

                        </div>
                        <div className="alert alert-danger">
                            {ApiErrorMSG}
                            

                        </div>

                    </div>

                </div>




            </div>

        </div>





    )



}




export{Login}






