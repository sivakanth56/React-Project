

import { useEffect, useState } from "react"
import { Footer } from "../Shard/Footer"
import { Header } from "../Shard/Header"
import axios from "axios"




function Usertable (){



     let [Udata,setUdata] =useState([])

     let [uTable,setutable]= useState([])

      let search="";



    useEffect ( () => {

        async function userdata (){


            let Apidata =  await axios.get ("https://dummyjson.com/users")
    
    
            console.log(Apidata.data.users)

            setUdata(Apidata.data.users)
            setutable(Apidata.data.users)
    
        }
    
    
           userdata()

    },[] )

    function handleSearch(e){

        search= e.target.value

        console.log(search)


               let Tempdata =   uTable.filter(user =>{

               let  Contains =      user.email.toLowerCase().includes(search.toLowerCase())

                   console.log(Contains)

                    return  Contains

                  })

                  setUdata([...Tempdata])

    }

    function EmailSort(){

        console.log(56)

        let TempData= Udata.sort((user1,user2)=>{

            if ( user1.email.toLowerCase() < user2.email.toLowerCase()){

                return-1


             } else{

              return-1
            }

           })

           setUdata([...TempData])
    }








    return (

        <div className="container">

            <div className="row mt-5">

                <div className="col-12 ">
                    < Header/>

                </div>

            </div>

            <div className="row mt-5 mb-5">

                <div className="col-2 mb-5">

                    <input type="text" placeholder="search" onChange={e => handleSearch(e)} className="form-control"></input>

                </div>


                <div className="col-12">

                    <div>

                        {

                            <table className="table table-striped">

                                <tr>

                                    <th>user id</th> <th> Name</th> <th onClick={e=> EmailSort()}>Email</th> <th> Age</th> <th> Gender</th>

                                </tr>
                                <tbody>

                                    {

                                        Udata.map(user => (

                                            <tr>

                                                <td>{user.id}</td> <td>{user.firstName}</td> <td>{user.email}</td> <td>{user.age}</td> <td>{user.gender}</td>



                                            </tr>

                                        ))



                                    }





                                </tbody>



                            </table>




                        }



                    </div>

                </div>




            </div>







            <div className="row mt-5">

                <div className="col-12 ">
                    < Footer/>

                </div>

            </div>

        </div>





    )








}




export default Usertable
















