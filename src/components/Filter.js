import { useState } from "react"
import React from 'react'

const Filter = ({data}) => {

    const [address,setaddress]=useState("");
    
    const [todo,setTodo]=useState([]);

    const handleFilter=()=>{
        
            
                const updateddata=data.filter(item=>item.Address.toString()===address);
            setTodo(updateddata);
            console.log(todo);
            
            
        
    }

  return (
    <div className="mx-4">
    
          <select class="form-control" id="exampleInputservice" required='yes' onChange={e=>setaddress(e.target.value)} value={address} style={{width:200}}>
            <option></option>
            <option>New Delhi</option>
            <option>Punjab</option>
            <option>West Bengal</option>
            <option>Odisha</option>
            <option>Karnataka</option>
            <option>Maharastra</option>
            <option>Assam</option>
            <option>Gujarat</option>
            <option>Jharkhand</option>
            <option>Bihar</option>
            
        </select>
        <button type="submit" class="btn btn-dark" onClick={handleFilter}>Filter</button>
      
        
    </div>
  )
}

export default Filter;