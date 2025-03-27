



     import  axios from "axios"
     import { useState } from "react"






function Sinup(){

    // use sttes varible

    var [name ,setName]= useState("")
    var [email,setEmail]= useState("")
    var [mobil ,setMobil]= useState("")
    var [password ,setPassword]= useState("")


    // use state error

    var [nameError, setNameError]=useState("")
    var [emailError,setEMAILError]=useState("")
    var [mobilError, setMOBILError]=useState("")
    var [passwordError,setPASSWORDError]=useState("")

    // API varible

    var [ApiErrorMSG,setApiErrorMSG]=useState("")
    var [ApiSuccessMSG,setApiSuccessMSG]=useState("")





    function handleNameChange(event){

      setName(event.target.value)

    }
    function handleEmailChange(event){
        setEmail(event.target.value)
    }
    function handleMobilChange(event){
        setMobil(event.target.value)
    }
    function handlePasswordChange(event){
        setPassword(event.target.value)

    }

       async function handleCreateForm (){

        var noOFFError =0
        
        if(name.length<3){
            setNameError("minum 3 charactor")
            noOFFError++
            


        } else{
            setNameError ("")
        }

        if(mobil.length == 10){

         setMOBILError("")

        }else{
            setMOBILError(" mobil number invalid ")
            noOFFError++
            
        }

        if(password.length >= 8){

            setPASSWORDError("")

        } else{
            setPASSWORDError("invlid pssword")
            noOFFError++
        }

        if(email.length >8){

            setEMAILError("")

        }else{
            setEMAILError("emil invalid")
            noOFFError++
        }


        if (noOFFError==0){

            console.log("calling api",noOFFError)

            var apiinputDATA={
                name:name, email:email, mobile:mobil,password:password

            }
          var apiresponess =  await axios.post('https://api.softwareschool.co/auth/signup',apiinputDATA)

               console.log(apiresponess)

            if(apiresponess.data == "SUCCESS"){

                 setApiSuccessMSG(apiresponess.data.message)
                 setApiErrorMSG("")
                 console.log(apiresponess.data.data.userId)
                 localStorage.setItem('loginid',apiresponess.data.data.userId)

            }else{
                setApiErrorMSG(apiresponess.data.message)
                setApiSuccessMSG("")
            }

        }
       






    }



    return (

        <div className="container">

            <div className="row ">
                <div className="col-4">

                    <h1>sinpu</h1>

                    <div className="mb-3">
                        Name 
                        <input type="text" onChange={event => handleNameChange(event)} className="form-control"placeholder="Name"></input>
                        <div className="text-danger">{nameError}</div>


                    </div>
                    <div className="mb-3">
                        Email
                        <input type="text"  onChange={event => handleEmailChange(event)}  className="form-control"placeholder="   Email"></input>
                        <div className="text-danger">{emailError}</div>


                     </div>
                     <div className="mb-3">
                        Mobil
                        <input type="number"  onChange={event => handleMobilChange(event)}  className="form-control"placeholder=" Mobil"l></input>
                        <div className="text-danger">{mobilError}</div>


                    </div>
                    <div className="mb-3">
                        Password
                        <input type="password"  onChange={event => handlePasswordChange(event)}  className="form-control"placeholder=" Password"l></input>
                        <div className="text-danger">{passwordError}</div>


                    </div>
                    <div>
                        <button  className="btn btn-primary" onClick={event=> handleCreateForm()}>CreateForm</button>
                    </div>
                    <div className="mt-3">
                        <div className="alert alert-success">
                            {   ApiSuccessMSG}

                        </div>
                        <div className="alert alert-danger">
                            {ApiErrorMSG}

                        </div>
                        
                        
                    
                    </div>
                    <div>
                        {
                            name
                        }
                        <br/>
                        {
                            email
                        } <br/>
                        {
                            mobil
                        }
                        <br/>
                        {
                            password
                        }
                    </div>
                    
                    



                




                    






                </div>

            </div>


        </div>




    )
}


export {Sinup}








