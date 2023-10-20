import React, { useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import PostForm from '../components/PostForm';
import { db } from '../components/firebase';
import Filter from '../components/Filter';
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  getDocs,
  where,limit
} from "firebase/firestore";
import Card from '../components/Card';


const Babysitter = () => {

  const { logout,user,isAuthenticated } = useAuth0();
  const [filterdata,setFilter]=useState([]);
  const [todos, setTodos] = React.useState([]);
  const [state,setState]=useState("");
  const [gender,setgender]=useState("");
  

  React.useEffect(() => {
    const q = query(collection(db, "Babysitter"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);


    
    
  




  return (
    <div style={{backgroundColor:'#bd5fc0'}}>
    <nav class="navbar navbar-expand-lg navbar-dark" id="navbar">
  <div class="container-fluid">
    <img id="logo" class="navbar-brand" src="assets/carehive-removebg-preview.png" alt=""/>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/Caretaker">Caretaker</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/Cook">Cook</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#contact">Contact</a>
          </li>
          <li class="nav-item">
              {isAuthenticated?<><a className='nav-link' style={{border:'2px solid white',width:50,height:50,textAlign:'center',backgroundColor:'white',color:'black',fontWeight:'600',borderRadius:'30px',fontFamily:'unset'}}>{user.email.charAt(0).toUpperCase()}</a>
              
              </>:null}
            
              </li>
          <li class="nav-item">
          <a onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='nav-link'>
      Log Out
    </a>
          </li>
        </ul>
   
      </div>
    </div>
</nav><div id="cookhero1">
    <div class="container carr py-5">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" style={{borderRadius:'6px'}}>
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="assets/babysitter1.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="assets/babysitter3.jpg" width="10vh" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="assets/babysitter1.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  </div><div class="container team py-5">
    <div class="m-auto text-center">
      <h1>Find Babysitters</h1>
      <p>Go with what you want </p>
    </div>
    <div className='d-flex flex-lg-row flex-md-row flex-column' style={{marginTop:20}}>
    <PostForm/>
    <div className="mx-4 my-lg-0 my-md-0 my-4">
    
          <select class="form-control"    id="exampleInputservice" required='yes' onChange={e=>setState(e.target.value)} value={state} style={{width:200}}>
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
        
      
        
    </div>
    <div className="mx-2">
    
          <select class="form-control" placeholder='All' id="exampleInputservice" required='yes' onChange={e=>setgender(e.target.value)} value={gender} style={{width:200}}>
            <option></option>
            <option>Male</option>
            <option>Female</option>
        </select>
        
      
        
    </div>
  
    </div>
    <div class="row">
    {todos.filter(todo=>todo.Address.includes(state) && todo.Gender.includes(gender)).map((todo) => (
          <Card item={todo}/>
          
        ))}
    </div>
  </div><div id="contact" class="newsletter py-5">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-9 m-auto text-center">
          <h1>Join Our Community</h1>
          <input type="text" class="px-3" placeholder="Enter your mail"/>
            <button class="bttn">Submit</button>
          </div>
      </div>
      <div class="row pt-5">
        <div class="col-lg-11 m-auto">
          <div class="row">
            <div class="col-lg-3 py-3">
              <h5 class=" pb-3 footerlogo"><img src="assets/carehive-removebg-preview.png" alt=""/></h5>
              <p><a href="#">Home</a></p>
              <p><a href="#">About us</a></p>
              <p><a href="#">Babysitter</a></p>
              <p><a href="#">Cook</a></p>
              <p><a href="#">Caretaker</a></p>
            </div>

            <div class="col-lg-3 py-3">
              <h5 class="pb-3">Legal</h5>
              <p><a href="#">Cookies</a></p>
              <p><a href="#">Terms and conditions</a></p>
              <p><a href="#">Privacy Policy</a></p>

            </div>

            <div class="col-lg-3 py-3">
              <h5 class="pb-3">About</h5>
              <p><a href="#">About us</a></p>
              <p><a href="#">Latest Features</a></p>
              <p><a href="#">FAQ</a></p>

            </div>

            <div class="col-lg-3 py-3">
              <h5 class="pb-3">Social Media</h5>
              <a href="#"><i class="fa-brands fa-linkedin"></i></a>
              <a href="#"><i class="fa-brands fa-facebook"></i></a>
              <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
            </div>

          </div>



        </div>
        <hr/>
              <p className='m-auto text-center text-secondary' >Made By Animesh Dey,Pritam Kumar Maity,Arya Aditanshu Behera And Shipra Tanvi</p>
      </div>
    </div>

  </div>
  </div>
  )
}

export default Babysitter

    




