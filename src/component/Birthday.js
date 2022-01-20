import React from 'react'
import Sidebar from './Sidebar'
import im from './img/5.jpg'
import Appbar from './Appbar'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import birth from './img/birth.jpeg'
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
 
}));






export default function Birthday() {

const {currentUser}=useAuth()
const history = useHistory()


    return (
        <div>
          
    <div  >
<div className="container">
  <div className="row align-items-start">
<Appbar/>
  </div>
      <Sidebar/>
<div  style={{paddingLeft:'15%',paddingTop:'5%'}}>  
   
   
   
     

    <Box   sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}  style={{background:'black'}}>
        <Grid item xs={6} md={8}  >
          <Item  style={{background:'black'}}><Avatar  src={im}   style={{width:'15%',marginLeft:'10%',height:'33%'}}/>  
          <h1 style={{color:'white'}}>Happy Birthday</h1>
          <p style={{color:'white'}}>“You were born, and the world became a better place”</p>
          <p style={{color:'white'}}>“You were born, and the world became a better place”</p>
        <h1  style={{color:'red',marginTop:'8%',textAlign:'center'}}><strong>Upcoming Birthday</strong></h1>
          
            </Item>
        </Grid>
        <Grid item xs={6} md={4} style={{background:'black'}}>
          <Item style={{background:'black'}}><img  src={birth}  style={{width:'100%', height:'100%', marginLeft:'37%'}}   />
    </Item>
        </Grid  >
        </Grid>
    
      
      <div style={{background:'#d32f2f'}} className='w-100'>
    <h2  style={{color:'white',textAlign:'center'}}><strong>Upcoming Birthdakkkkkkkkkkkkkkkky</strong></h2>
    </div>
 </Box>











</div>
</div>
</div>

        </div>
    )
}

