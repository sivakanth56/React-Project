import axios from "axios"
import { Footer } from "../Shard/Footer"
import { Header } from "../Shard/Header"
import { useEffect, useState } from "react"




function Userdata(){

  let [users,setUsers] =useState([])
  let [userdata,setuserdata] =useState([])

  let search="";



     useEffect(  () =>{
        async function Table(){


            let APIResponse =  await axios .get("https://dummyjson.com/users")
    
            //console.log(APIResponse.data.users)
    
            setUsers(APIResponse.data.users)
            setuserdata(APIResponse.data.users)
    console.log('Table function')
    
    
        }
 Table()
     },[])

      function searchtext(e){
        ////console.log(userdata)

        search = e.target.value
        //console.log(search)

        let Tempdata=  userdata.filter (user=> {

            let isContains = user.firstName.toLowerCase().includes(search.toLowerCase())

            console.log(isContains)

            return (isContains)
        })
//console.log('search: ', Tempdata)
          setUsers ([...Tempdata])

      }

       function handleNameSort(){
        console.log(56)

         let TempData = users.sort((user1,user2) => {


            if(user1.firstName.toLowerCase() < user2.firstName.toLowerCase()){

                return -1
            


            } else{
                return-1
            }
         })
         console.log(TempData)
         setUsers([...TempData])


       }

        async function handleDelete (user){

        console.log('handleDelete:',user)

        let Apidata= await axios.delete("https://dummyjson.com/users/" + user.id)

        let TempData = users.filter(tempuser => tempuser.id != user.id)

        setUsers ([...TempData])

       }

       let [Name,setName] =useState("")
       let [Email,setEmail] =useState("")

       let [Age,setAge]=useState("")
       let [Gender,setGender]=useState("")
       //let [update,setupdte]=useState("")

       function handleEdite (user){
        setName(user.firstName)
        setEmail(user.email)
        setAge(user.age)
        setGender(user.gender)
        


       }







    return(

        <div className="container">

            <div className="row mt-5 mb-5">
                <div className="col-12">
                    < Header/>

                </div>

            </div>
                    


                    <div className="row mt-5 mb-5">

                        <div className="col-5 mb-5">

                            <input type="text " placeholder="search" onChange={e => searchtext(e)} className="form-control"></input>

                        </div>




                          <div className="col-8">


                            {
                                 Object.keys(users) .length > 0 &&

                                <div>

                                    <table className="table table-striped" >

                                        <tr>
                                            <th>user id</th> <th onClick={e =>  handleNameSort ()}> Name</th> <th> Email</th> <th> Age</th> <th> Gander</th>
                                              <th>Action</th>
                                        </tr>
                                        <tbody>

                                            {

                                                users.map(user => (

                                                    <tr>

                                                        <td>{user.id}</td> <td>{user.firstName}</td> <td>{user.email}</td> <td>{user.age}</td> <td>{user.gender}</td>

                                                        <td> <button className="btn btn-primary" onClick={e => handleEdite (user)}>Edit</button></td> <br/> 

                                                        <td><button className="btn btn-danger" onClick={e => handleDelete (user)}>Delete</button></td>



                                                    </tr>

                                                ))
                                            }

                                        </tbody>

                                    </table>
                                </div>
                            } 

                       </div> <br/>
                       <div className="col-4">  

                        Name:
                        <input type="text" placeholder="Name" className="form-control" value={Name}></input> 
                        Email:
                        <input type="text" placeholder="Email" className="form-control" value={Email}></input>
                        Age:
                        <input type="text" placeholder="Age" className="form-control" value={Age}></input>
                        Gender
                        <input type="text" placeholder="Gender" className="form-control" value={Gender}></input> <br/>
                        <button className="btn btn-warning" >update</button>

                       </div>

                    </div>










               



            <div className="row mt-5 mb-5">
                <div className="col-12">
                    < Footer/>

                </div>

            </div>


        </div>
    )



}



export default Userdata















