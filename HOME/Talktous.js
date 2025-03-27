
function Talktous ({message}){




   return(
     
    <div className="card shadow p-4 border-0">
        <h3 className="text-warning text-center">{message}</h3>
        <h1 className="text-center">Tallk To Us</h1>
        <div className="mb-3">
            Name

            <input type="text" placeholder="Name" className="form-control"></input>

        </div>
        

        <div className="mb-3">
            Email
           <input type="text" placeholder="EMAIL" className="form-control"></input>
        </div>
         <div className="-3">
            Mobile
         <input type="text" placeholder="Mobile" className="form-control"></input>
         </div> <br/>
         <div>
            <button className="btn btn-primary"> Submit Botton</button>
         </div>

    

    </div>


   )



}

export {Talktous}










