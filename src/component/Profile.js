import React, { useRef, useEffect,useState } from 'react'
import Sidebar from './Sidebar'
import App from './Appbar'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import {db} from '../contexts/firebase'
import { cibFnac } from '@coreui/icons'
import im from './img/5.jpg'
import Avatar from '@mui/material/Avatar';
import { Box, Grid, AppBar, Toolbar, Typography } from '@mui/material'

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
    <App/>
      </div>
        <div   className="row ">
        
          <Sidebar/>
    <div  style={{paddingLeft:'15%',paddingTop:'5%'}}>  
    
      {
        blogs && blogs.map(blog=>
        (
            <div className="blog-container">
<Box style={{paddingTop:'1.5%'}}>
<Grid container spacing={2}> 
<Grid>           
  <Avatar src={im}  style={{width:'220px', height:'230px'}}/> 
  </Grid>
  <Grid>
    kkkkkk
     <Grid>
       <Toolbar>
         <Typography variant="h6">
           Name : {blog.firstname} {blog.lastname}
         </Typography>
       </Toolbar>
  
  </Grid></Grid>
  </Grid> 
  </Box>



           
            </div>
          )
        )
      }
    </div>
    </div>
    </div>

    )
}











