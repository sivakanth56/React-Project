


function list (){

    /*function handleFev(data){

        let tempdata= products.map(product => {
 
             if(product.id == data.id){
 
                 if(product.is_Fv== false){
 
                     product.is_Fv=true
 
                 } else{
                     product.is_Fv=false
                 }
 
             }
 
             return(product)
 
         })
         setproducts(tempdata)
 
     }*/

    {
        products.map(product =>(

          <div className="col-3">
              <div className="card shadow">
                  <img src={product.thumbnail} className="card-img-top"></img>
                  <div className="card-body">
                      <h4 className="card-title">{product.title}</h4>
                      <p card-text>
                          {

                              product.description
                              
                          }
                      

                      </p>
                      <div>
                          <button className="btn btn-primary" onClick={e =>handleFev (product)}><i className="bi bi-heart-fill"></i>

                          {
                              product.is_Fv == true && <span>remove from Favourite</span>
                          }

                          {
                              product.is_Fv == false && <span>Add Like</span>
                          }






                          </button>
                      </div>

                  </div>


              </div>




          </div>
        ))
      }



}



export default list









