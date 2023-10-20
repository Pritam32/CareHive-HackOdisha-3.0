    import React from 'react'
    import { useAuth0 } from "@auth0/auth0-react";
    
    
    export const Landing = () => {
      const { logout,user,isAuthenticated } = useAuth0();
      const { loginWithRedirect } = useAuth0();
      return (
        <div style={{backgroundColor:'white'}}>
            <nav class="navbar navbar-expand-lg navbar-dark" id="navbar1">
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
                <a class="nav-link active" aria-current="page" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#contact">Contact</a>
              </li>
              <li class="nav-item">
              {isAuthenticated?<><a className='nav-link' style={{border:'2px solid white',width:50,height:50,textAlign:'center',backgroundColor:'white',color:'black',fontWeight:'600',borderRadius:'30px',fontFamily:'unset'}}>{user.name.charAt(0).toUpperCase()}</a>
              
              </>:<a  onClick={() => loginWithRedirect()} class='nav-link active' href='#Login'>Log In</a>}
            
              </li>
              <li className='nav-item'>
               {isAuthenticated?<a onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='nav-link'>
      Log Out
    </a>:null}
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn" type="submit"><i class="fa-solid fa-magnifying-glass" style={{color: '#ffffff'}}></i></button>
            </form>
          </div>
        </div>
      </nav>
    

        <div class="main">
            <div class="container py-5">
                <div class="row py-5">
                    <div class="col-lg-7 pt-4 text-center">
                        <h1 class="pt-5">Concern care & Protect</h1>
                        {isAuthenticated?<a href="/Babysitter" id="btn1" class=" py-1">Hire Now!</a>:<a  onClick={() => loginWithRedirect()} class='py-1' id='btn1'>Hire Now!</a>}
                    </div>
    
                    <div class="col-lg-3 pt-4 m-auto text-center">
                     <img id="tree" src="assets/hero.png"  alt="" />
                    </div>
                </div>
                
            </div>
    
        </div>




  {isAuthenticated?
        <>
   <section id="features" class="about">
    <div class="row m-auto text-center">

        <div class="row py-5 ">
            <div class="col-lg-8 m-auto text-center">
                <h1 class="headings">Not Just a ordinary Platform !!</h1>
                <h6>Get the best services nearby</h6>
            </div>
        </div>

        <div class="col-lg-4">
            <div class="card">
              <img class="card-img-top" src="assets/babysitterprofile.jpg" alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title">Baby Sitters</h5>
                <p class="card-text">When in doubt, call a babysitter. They have magical powers to make kids behave</p>
                
                <a href="/Babysitter" id="sec" class="btn m-auto">Hire Now!!</a>
              </div>
            </div>
        </div>

        <div class="col-lg-4 py-5 py-lg-0">
            <div class="card">
              <img class="card-img-top" src="assets/cookprofile.jpg" alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title">Cooks</h5>
                <p class="card-text">Turning your kitchen into a five-star restaurant, one meal at a time</p>
                
                <a href="/Cook" id="sec" class="btn m-auto">Hire Now!!</a>
              </div>
            </div>
        </div>

        <div class="col-lg-4">
            <div class="card">
              <img class="card-img-top" src="assets/caretakerprofile.jpg" alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title">Caretakers</h5>
                <p class="card-text">Caring for the aged is a noble mission, and caregivers are the heroes who accept this calling</p>
           
                <a href="Caretaker" id="sec" class="btn  m-auto">Hire Now!!</a>
              </div>
            </div>
        </div>
       
    </div>
</section>
</>:null}


        
    <div id="about" class="features">
      <div class="container py-5">
 
         <div class="row">
             <div class="col-lg-9 m-auto text-center">
                 <h1>About Us!!</h1>
             </div>
         </div>
         
        
         <div class="row">
             <div class="col-lg-6 py-5 m-auto text-center">
              <img src="assets/smile.jpg" alt="" />
             </div>
             <div class="col-lg-6 py-lg-5">
                <div class="row">
                  <div class="col-lg-6 m-auto text-center">
                     <h2>Quality Care Services</h2>
                  </div>
                </div>
                <div class="row py-4">
                 <div class="col-lg-6 m-auto text-center">
                    <p>At Quality Care Services, we are dedicated to providing exceptional care services tailored to the unique needs. Our mission is to support and enhance the physical, mental, and emotional health of workers, ensuring they can thrive both on and off the job.</p>
                 </div>
               </div>
             </div>
         </div>
 
         
         <div class="row">
             <div class="col-lg-6 py-5 m-auto text-center">
              <img src="assets/caretaker.jpg" alt="" />
             </div>
             <div class="col-lg-6 py-lg-5">
                <div class="row">
                  <div class="col-lg-6 m-auto text-center">
                     <h2>Find Local Caretakers</h2>
                  </div>
                </div>
                <div class="row py-4">
                 <div class="col-lg-6 m-auto text-center">
                    <p>Are you in search of a dedicated and reliable caregiver in Your City/Region?  to ensure the highest level of comfort and well-being. Then Look no further! to get your trusted local caretaker, committed to providing compassionate and professional care for your loved ones.</p>
                 </div>
               </div>
             </div>
         </div>
 
         
         <div class="row">
             <div class="col-lg-6 py-5 m-auto text-center">
              <img src="assets/766dcb94aa6389a05221adddbba0be90.jpeg" alt=""/>
             </div>
             <div class="col-lg-6 py-lg-5">
                <div class="row">
                  <div class="col-lg-6 m-auto text-center">
                     <h2>Protect your Family</h2>
                  </div>
                </div>
                <div class="row py-4">
                 <div class="col-lg-6 m-auto text-center">
                    <p>Ensuring the safety and security of your family is a top priority. At CareHive, we understand the importance of peace of mind and are here to provide you with the guidance and solutions you need to protect your loved ones.</p>
               </div>
               </div>
             </div>
         </div>
 
         
 
      </div>
    </div>

    
    <section class="study py-5">
      <div class="container py-5">
          <div class="row">
              <div class="col-lg-9 m-auto text-center">
                  <h1>What are you waiting for!!</h1>
              </div>
          </div>
          <div class="row py-5 ">
              <div class="col-lg-5 m-auto text-center">
                  <button id="btn2"><a style={{textDecoration:'none'}} href="study.html">Lets gooo!!</a></button>
              </div>
          </div>
          
      </div>

  </section>

  

    <div id="contact" class="contact py-5">
      <div class="container py-5">
        <div class="row">
            <div class="col-lg-5 m-auto text-center">
                <h1>Contact Us</h1>
                <h6 style={{color:'red'}}>Always be in touch with us</h6>
            </div>
        </div>
        <div class="row py-5">
            <div class="col-lg-9 m-auto">
                <div class="row">
                    <div class="col-lg-4">
                        <h6>LOCATION</h6>
                        <p>New York 0911 First Street DC</p>
                   
                        <h6>PHONE</h6>
                        <p>03444-3243565</p>
               
                        <h6>EMAIL</h6>
                        <p>studybuddies123@gmail.com</p>
                  
                   </div>
                   <div class="col-lg-7">
                    <div class="row">
                        <div class="col-lg-6">
                            <input type="text" class="form-control" placeholder="First name"/>
                        </div>
                        <div class="col-lg-6">
                            <input type="text" class="form-control" placeholder="Second name"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 py-3">
                            <textarea name="" class="form-control" placeholder="Enter your message" id="" cols="10" rows="5"></textarea>
                        </div>
                    </div>
                    <button type="submit" id="btn3">Submit</button>

                   </div>
               </div>
        </div>
      </div>
    </div>

    


    <div class="newsletter py-5">
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
</div>
      )
    }
    
    