import React, { useContext, useRef, useState  } from "react"
import { auth } from "../contexts/firebase"
import '@firebase/firestore';
import { db } from "../contexts/firebase"
import { useAuth } from "../contexts/AuthContext"
import Signup  from "./Signup";
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import Buttons from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { ButtonBase, tableBodyClasses } from "@mui/material";

import {storage} from '../contexts/firebase';



 function  Update () {
    const { currentUser} = useAuth()
    const [singleImage,setSingleImage]=useState("");



    const allInputs ={imgUrl:''}
    const [imageAsFile,setImageAsFile]=useState('')
    const [imageAsUrl,setImageAsUrl]=useState(allInputs)
    console.log(imageAsFile)
    const handleImageAsFile=(e)=>{
      const imge=e.target.files[0]
      setImageAsFile(imageAsFile=>(imge))
    }

const handleFireBaseUpload=e=>{
  e.preventDefault()
  console.log('start of upload')
  if(imageAsFile==''){
    console.error('not an image, the image file');
  }
  const uploadTask=storage.ref('/images/${imageAsFile.name}').put(imageAsFile)
  uploadTask.on('state_changed',
  (snapShot)=>{
    console.log(snapShot)
  },(err)=>{
console.log(err)
  },()=>{
    storage.ref('images').child(imageAsFile.name).getDownloadURL()
    .then(fireBaseUrl=>{
      setImageAsUrl(prevObject=>({...prevObject,fireBaseUrl}))
    })
console.log(imageAsUrl)


  })
}

    const firstnameRef = useRef()
    const lastnameRef= useRef()
    const addressRef = useRef()
    const mobilenoRef = useRef()
    const ageRef = useRef()
  const photoRef=useRef()
  
  
    
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()





    function handleSubmit(e) {
        e.preventDefault()
    console.log("sucesss da                          ")
    console.log(ageRef.current.value)


    try{
        db.collection("users").doc(currentUser.uid ).set({
           
            email:currentUser.email,
            
            firstname:firstnameRef.current.value,
            lastname:lastnameRef.current.value,
            address:addressRef.current.value,
            age:ageRef.current.value,
        photoRef:imageAsUrl
        })
        }catch(err){
            console.erroe(err)
        }
          


    history.push("/")

    


      }






  

    return (

        <div>
  
  <Card>
  
  <Card.Body>
    <h2 className="text-center mb-4">Details</h2>
    {error && <Alert variant="danger">{error}</Alert>}
    <Form onSubmit={handleSubmit}>
      <Form.Group id="firstname">
        <Form.Label>firstname</Form.Label>
        <Form.Control type="firstname" placeholder="firstname" ref={firstnameRef} required required className="w-50  d-flex justify-content-around" class="col-lg-4 col-lg-offset-4"/>
      </Form.Group>
      <Form.Group id="lastname">
        <Form.Label>lastname</Form.Label>
        <Form.Control type="lastname"placeholder="lastname" ref={lastnameRef} required required className="w-50  d-flex justify-content-around" class="col-lg-4 col-lg-offset-4"/>
      </Form.Group>
      <Form.Group id="address">
        <Form.Label>address</Form.Label>
        <Form.Control type="address" placeholder="address" ref={addressRef} required required className="w-50  d-flex justify-content-around" class="col-lg-4 col-lg-offset-4" />
      </Form.Group>
      <Form.Group id="mobileno">
        <Form.Label>mobileno</Form.Label>
        <Form.Control type="mobileno" placeholder="mobileno" ref={mobilenoRef} required required className="w-50  d-flex justify-content-around" class="col-lg-4 col-lg-offset-4" />
      </Form.Group>
      <Form.Group id="age">
        <Form.Label>age</Form.Label>
        <Form.Control type="age" placeholder="age" ref={ageRef} required required className="w-50  d-flex justify-content-around" class="col-lg-4 col-lg-offset-4" />
      </Form.Group>
   
    
     
      <br></br>
      <Buttons disabled={loading}  color="info" variant="contained"endIcon={<SendIcon />} type="submit">
        Sign Up
      </Buttons>

    </Form>
  
  </Card.Body>
  <form onSubmit={handleFireBaseUpload}>
<input type="file" onChange={handleImageAsFile} />
<button>upload</button>
      </form>
  <img src={imageAsUrl.imgUrl}/>
</Card>

            </div>
    )
}
 
export default Update