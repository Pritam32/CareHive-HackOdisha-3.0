    import React, { useState } from 'react'
    import { ModalBody } from 'react-bootstrap';
    import { Modal,ModalHeader} from 'reactstrap';
    import { db } from './firebase';
    import { collection, addDoc } from "firebase/firestore";
    import { storage } from "./firebase1";
    import { v4 } from "uuid";
    import {
        ref,
        uploadBytes,
        getDownloadURL,
        listAll,
      } from "firebase/storage";
import { useAuth0 } from '@auth0/auth0-react';

    const PostForm = () => {
        const [fileUpload, setFileUpload] = useState(null);
        const [fileUpload1, setFileUpload1] = useState(null);
  const [fileInfo, setFileInfo] = useState([]);
  const [fileInfo1,setFileInfo1]=useState([]);
  const [Url, setUrl] = useState("");
  const [Url1, setUrl1] = useState("");
        const [gender,setgender]=useState("");
        const [show,setshow]=useState(false);
        const [username,setname]=useState("");
        const [phone,setphone]=useState("");
        const [service,setservice]=useState("");
        const [address,setaddress]=useState("");
        const filesListRef = ref(storage, "files/");

        const { logout,user,isAuthenticated } = useAuth0();

        const uploadFile = () => {
            if (fileUpload == null) return;
            setUrl("Getting file link..");
            const fileRef = ref(storage, `Aadhaar_files/${fileUpload.name + v4()}`);
            uploadBytes(fileRef, fileUpload).then((snapshot) => {
              getDownloadURL(snapshot.ref).then((url) => {
                setUrl(url);
                setFileInfo(url);
               
        
                // Store the updated file info in local storage
              
              });
            });
          };

          const uploadFile1 = () => {
            if (fileUpload == null) return;
            setUrl("Getting file link..");
            const fileRef = ref(storage, `PAN_files/${fileUpload.name + v4()}`);
            uploadBytes(fileRef, fileUpload).then((snapshot) => {
              getDownloadURL(snapshot.ref).then((url) => {
                setUrl1(url);
                setFileInfo1(url);
               
        
                // Store the updated file info in local storage
              
              });
            });
          };

        const AddPost=async(e)=>{
            e.preventDefault();
            if (username !== "" && phone!=="" && service!=="" && address!=="" && fileUpload!==null) {
                await addDoc(collection(db, ""+service), {
                  Name:username,
                  Email:user.email,
                  Gender:gender,
                  Phone:phone,
                  Service:service,
                  Address:address,
                  Aadhar_url:fileInfo,
                }).then(()=>{
                    uploadFile();
                    
                }).then(()=>{
                    uploadFile1();
                }).then(()=>{
                setname("");
                setaddress("");
                setservice("");
                setphone("");
                setshow(!show);
            })
              }
        }

        
    

    return (
        <div >
            <Modal size='lg' isOpen={show} toggle={()=>setshow(!show)}>
                <ModalHeader toggle={()=>setshow(!show)}>
                    Add Post
                </ModalHeader>
                <ModalBody>
                <form onSubmit={AddPost} >
    <div class="mb-3">
        <label for="exampleInputusername1" class="form-label">Username</label>
        <input type="text" class="form-control" id='exampleInputusername1' required='yes' onChange={e=>setname(e.target.value)} value={username}/>
        
    </div>
    <div class="mb-3">
        <label for="exampleInputPhone" class="form-label">Phone</label>
        <input type="tel" class="form-control" id="exampleInputPhone" required='yes'    onChange={e=>setphone(e.target.value)} value={phone}/>
    </div>
    <div class="mb-3">
        <label for="exampleInputgender" class="form-label">Gender</label>
        <select class="form-control" id="exampleInputgender" required='yes'    onChange={e=>setgender(e.target.value)} value={gender}>
            <option></option>
            <option>Male</option>
            <option>Female</option>
        </select>
    </div>
    <div class="mb-4">
        <label for="exampleInputPhone" class="form-label">Service</label>
        <select class="form-control" id="exampleInputservice" required='yes' onChange={e=>setservice(e.target.value)} value={service}>
            <option></option>
            <option>Babysitter</option>
            <option>Cook</option>
            <option>Caretaker</option>
        </select>
    </div>
    <div class="mb-3">
        <label for="exampleInputPhone" class="form-label">Aadhar card</label><br></br>
        <input
        type="file"
        onChange={(event) => {
          setFileUpload(event.target.files[0]);
        }}
      required='yes'/>
    </div>
    <div class="mb-3">
        <label for="exampleInputPhone" class="form-label">PAN card</label><br></br>
        <input
        type="file"
        onChange={(event) => {
          setFileUpload1(event.target.files[0]);
        }}
      required='yes'/>
    </div>
    <div class="mb-3">
        <label for="exampleInputAddress" class="form-label">Address</label>
        <select class="form-control" id="exampleInputservice" required='yes' onChange={e=>setaddress(e.target.value)} value={address}>
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
   
    <button type="submit" class="btn btn-primary">Add </button>
    </form>
                </ModalBody>

            </Modal>
            <button onClick={()=>setshow(!show)} style={{backgroundColor:'black',padding:'7px',border:'none',borderRadius:10,color:'white'}}>Create +</button>
        </div>
    )
    }

    export default PostForm