import  TheMessge   from   './TheMessge'
import { useState } from "react"
export default function Form(){
    const [allerorrMessge , setallerorrMessge] = useState(null);
    const  [showModel , setshowModel ] = useState(false);
     const [formList, setFormList] = useState([
   
       { id: 1,
         name: "",
         phoneNumber: "",
          salary: "",
           age: "" ,
        isImploiee: false,
       },
  ]);
    

     function handeldisAblde (event) 
      
     {      event.preventDefault();
        setallerorrMessge (null);
            const { age , phoneNumber} = formList;
          
            if ( age < 18 || age > 100 ){
                setallerorrMessge ("the age is not allowed")
            } else if(phoneNumber.length < 10 || phoneNumber.length  > 12 ) {
                setallerorrMessge ("the number is incorrect")
            }
                  
                
                 setshowModel(true);
            
     };

 const isDISable =
  formList.name == "" ||
 formList.age == "" ||
 formList.phoneNumber == "" ||
  formList.isImploiee == "" ;

       function handelDiveClick()
       {
        if (showModel ){ setshowModel(false) }
       
       };

      

    return( <div 
      onClick = {handelDiveClick}
      
    >
   <form className=" divAlform">
    <h1 className='h1Style'> Requesting a loan</h1>  
    <hr className='hRStyle' />
     <label 
      
     > Name</label> 
    <input type="text"
     value= {formList.name }
      onChange={ 
        (event)=>
        {setFormList({...formList, name: event.target.value })}}
       />
   
    <label 
    
    > phoneNumber</label> 
    <input type="text"
     value= {formList.phoneNumber }
     onChange={ 
       (event)=>
       {setFormList({...formList, phoneNumber: event.target.value })}}
 />

    <label > Age</label> 
    <input type="text"  value= {formList.age }
      onChange={ 
        (event)=>
        {setFormList({...formList, age: event.target.value })}}
        />
    <div className="divamploiee">
    <label  > Are you emploiee</label> 
    <input type="checkbox"
     style = {{marginTop:"10px"}}
     value= {formList.isImploiee }
     onChange={ 
       (event)=>
       {setFormList({...formList, isImploiee: event.target.checked })}}
    />

  <label > Salary </label> 
    <select 
     value= {formList.salary }
     className='slectedSumitStyle'
      onChange={ 
        (event)=>
        {setFormList({...formList, salary: event.target.value })}}  > 
        <option > less than 500$</option>
        <option > between 500$ and 1000$</option>
        <option > mor than  2000$</option>
    </select>
    <button 
    className= {isDISable? "disAblde": "" }
     onClick={handeldisAblde}
     disabled ={isDISable }
       id="btnsubmit"
    > submit</button> 
     </div>
   </form>
       
 <TheMessge 
 isVseble = {showModel} 
 erorrMessge = {allerorrMessge }
 />
   
</div>
)};









