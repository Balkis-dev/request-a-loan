export default function TheMessge({isVseble , erorrMessge = null}){
    if( isVseble){ 
        return(
               <div 
           
               >
               <div  className=" theMessgeStyle"  >
             <h5
               
                 className= "erorrMessge" 
                 style ={{color:erorrMessge ? "red" : "green"}}> 
                 {erorrMessge != null 
                  ? erorrMessge :
                   "Your request has been submitted successfully"} 
             </h5>
               </div>
            </div>
       
           )

    }else{
     return(<></> )
    }
   
}