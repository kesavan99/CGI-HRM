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

import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';







const Input = styled('input')({
  display: 'none',
});




 function  Update () {
    const { currentUser} = useAuth()
    const [singleImage,setSingleImage]=useState("");


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
    console.log("sucesss                        ")
    
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
      <Form.Group></Form.Group>
     
      <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </Stack>
      <br></br>
      <Buttons disabled={loading}  color="info" variant="contained"endIcon={<SendIcon />} type="submit">
        Sign Up
      </Buttons>

    </Form>
  </Card.Body>
</Card>

            </div>
    )
}
 
export default Update