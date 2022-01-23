import React from 'react'
import Sidebar from './Sidebar'
import Appbar from './Appbar'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import CIcon from '@coreui/icons-react';
import {cilPencil} from '@coreui/icons'


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
<div  style={{paddingLeft:'15%',paddingTop:'5%'}}>  
     
<div style={{paddingLeft:'98%' }}> edit
<Link to="/Announcementdb">
<CIcon  style={{color:'blue'}} size='xxl'icon={cilPencil}   />
</Link>
</div>

This announce

</div>
</div>
</div>
</div>

        </div>
    )
}
