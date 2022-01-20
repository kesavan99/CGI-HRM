import React, { useRef, useEffect,useState } from 'react'
import Sidebar from './Sidebar'
import Appbar from './Appbar'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import {db} from '../contexts/firebase'
import { cibFnac } from '@coreui/icons'


export default function Profile() {

  const history = useHistory()
 
  const { currentUser} = useAuth()

  const [blogs,setBlogs]=useState([])

  useEffect(() => {
    fetchBlogs();
  }, [])

  const fetchBlogs=async()=>{
    db.collection('users')
   .doc(currentUser.uid)
  .get()
  .then(doc=>{
    setBlogs([...blogs,doc.data()])
    console.log(doc.data())
  })
}
  

    return (
      
      <div className="container">
      <div className="row align-items-start">
    <Appbar/>
      </div>
        <div   className="row ">
        
          <Sidebar/>
    <div  style={{paddingLeft:'15%',paddingTop:'5%'}}>  
    
      {
        blogs && blogs.map(blog=>
        (
            <div className="blog-container">
             
              <h4>{blog.age}</h4>
              <p>{blog.address}</p>
           
           
            </div>
          )
        )
      }
    </div>
    </div>
    </div>

    )
}











