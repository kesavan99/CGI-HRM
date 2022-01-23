import React from 'react'
import Sidebar from './Sidebar'
import Appbar from './Appbar'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import {cilPencil} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import Button from '@mui/material/Button';



export default function Announcement() {

const {currentUser}=useAuth()
const history = useHistory()


    return (
        <div>
          
    <div  >
<div className="container">
  <div className="row align-items-start">
<Appbar/>
  </div>
    <div   className="row ">
    
      <Sidebar/>
<div  style={{paddingLeft:'14%',paddingTop:'5%'}}>  
<div style={{paddingTop:'3%'}}>
  
<Button variant="contained" href="/Announcementdb" style={{color:"white", background:"#2196f3"}} >Create</Button>
</div>
This announce

</div>
</div>
</div>
</div>

        </div>
    )
}
