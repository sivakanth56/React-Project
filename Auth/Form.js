import { useState } from "react"


function Form (){


 
 var [gender,setGender]=useState("")
 var[cricketer,setCricketer]=useState("")

 var [reactjs,setReactjs]=useState("")
 var[springboot,setSpringboot]=useState("")
 var[datascience,setDatascience]=useState("")
 

  function handlecricketer(e){

    setCricketer(e.target.value)

  }
  

  function handleGender(e){
    setGender(e.target.value)
  }


  function handlereactjs(e){

    if(e.target.checked == true){
         


        setReactjs(true)

    } else{
        setReactjs(false)
    }
  }
  function handlespringboot(e){
    if(e.target.checked){
        setSpringboot(true)
    }else{
        setSpringboot(false)
    }
  }


   function handledatascience (e){
    if(e.target.checked){
        setDatascience(true)
    } else{
        setDatascience(false)
    }
   }





    return(

        <div className="continer">

            <div className="row">
                <div className="col-3">
                    <h3 className="text-center"> Form-Data</h3>

                    <div>
                        Cricketer

                        <select className="form-select" onChange={e => handlecricketer(e)}>
                            <option>nani</option>
                            <option>msdhoni</option>
                            <option>sivakanth</option>
                            <option>anjireddy</option>
                            <option>suryakumar</option>
                        </select>

                    </div> <br/>
                    <div className="form-check mb-3">

                        <label> Cources</label>
                        <br/>
                        
                        <input type="checkbox" placeholder="box" onChange={e => handlereactjs(e)} /> reactjs <br/>
                        <input type="checkbox" placeholder="box"  onChange={e => handlespringboot(e) }/> springboot <br/>
                        <input type="checkbox" placeholder="box" onChange={e => handledatascience (e)} /> datascience
                        
                    </div>
                    <div className="form-check">
                        Gender
                        <br/>

                        <input type="radio" placeholder="male" name="gender" onChange={e =>handleGender(e)}/> Male <br/>
                        <input type="radio" placeholder="female" name="gender" onChange={e => handleGender(e)}/> Female

                    </div> <br/>
                    <div>
                        <button className="btn btn-primary">click buton</button>
                    </div>
                    <div>
                         
                        
                        Cricketer:{cricketer}
                        <br/>
                        Gender:{gender} <br/>
                        Reactjs:{ reactjs.toString()} <br/>
                        Springboot:{springboot.toString()}<br/>
                        Datascience:{ datascience.toString()}


                        
            
                    </div>

                </div>

            </div>

        </div>
    )

}

export{Form}









