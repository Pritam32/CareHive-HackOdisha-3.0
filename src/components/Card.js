import React, { useState ,useEffect} from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { db } from './firebase';
import {
    collection,
    query,
    onSnapshot,
    doc,
    updateDoc,
    deleteDoc,
  } from "firebase/firestore";

const Card = ({item}) => {
    const [like,setlike]=useState(false);
    const [email,setEmail]=useState("");
    const {logout,user}=useAuth0();
    
    const likeCard=()=>{
       console.log(item.Gender); 
       setlike(!like);
    }
    const deletePost=async()=>{
        if(user.email===item.Email){
            await deleteDoc(doc(db, item.Service, item.id));
        }
        
    }
    
  return (
    
            <div class="col-lg-6 mt-4">
                <div class="member d-flex flex-lg-row flex-md-row flex-column align-items-start justify-content-space-between">
                    <div class="teampic">
                       <img src={item.Gender=='Male'?"assets/man.jpg":"assets/woman.png"} alt="teampic " class="img-fluid"/>
                    </div>
                    <div class="memberinfo">
                        <h4 style={{width:'300px'}}>{item.Name}</h4>
                        <span>{item.Service}</span>
                         
                        <p>{item.Address}</p>
                        <div className='phone'>
                        <h4>Ph-</h4> <h4>{item.Phone}</h4>
                        </div>

                    </div>
                    
                    <div className='d-flex mt-4'>
                    <div onClick={likeCard}>
                        {like?<i class="fa-solid fa-heart" style={{color:'red',fontSize:30}}/>:
                        <i class="fa-regular fa-heart" style={{color:'gray',fontSize:30}}/> }
                    </div>
                     
                        <i class="fa-solid fa-trash mx-3"  style={{color:'gray',fontSize:25}} onClick={deletePost}/>
                    
                    </div>

                </div>
            </div>
        
  )
}

export default Card;