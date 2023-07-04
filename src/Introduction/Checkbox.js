import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";


const Checkbox = ()=>{
    function handleData(e){
        e.preventDefault()
        console.warn("all data" ,names,interest,beck)
    
    }

const [names,setName]=useState("")
const [interest,setInterest]=useState("")
const [beck,setBeck]=useState(false);
return (
    <div>
     <form className="box"  onSubmit={handleData}>
         <input type="text" placeholder="Enter Name"  onChange={(e)=>setName(e.target.value)}/> <br/>  <br/>
         <select onChange={(e)=>setInterest(e.target.value)}>
             <option>Names</option>
             <option>Bridget</option>
             <option>Brendah</option>
             <option>Mary</option>
             <option>Rachel</option>
             <option>Rebecca</option>
         </select>
         <br/>
         <br/>
         <input type="checkbox" onChange={(e)=>setBeck(e.target.checked)}/> <span>Just pick your choice</span>
         <br/>
         <br/>
         <button type="submit">Submit</button>
         

         </form>  
    
    </div>
    
);
};
export default Checkbox ;