



function Producte({product, updateCard, removeCard}){
    console.log(product)

    function addToCard(){
        updateCard ()


    }

    function removeCarditem(){

        removeCard ()

    }



return(
   
   
    <div className="col-3">
              <div className="card shadow">
                  <img src={product.thumbnail} className="card-img-top"></img>
                  <div className="card-body">
                      <h4 className="card-title"> title:{product.title}</h4>
                      <h5 > Price:{product.price}</h5>
                      <p>
                        
                        {
                            product.description
                        }
                        
                      </p>  
                      <div>
                        <button className="btn btn-primary" onClick={e => addToCard ()} >Add to card</button> <br/> <br/>
                        <button className="btn btn-danger" onClick={e => removeCarditem() }>Removeitem</button>
                      </div>


               
                      
                    </div> 
                </div>

    </div>               


    


   
)


} 

export  {Producte}









