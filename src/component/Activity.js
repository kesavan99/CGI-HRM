import React from 'react'
import Sidebar from './Sidebar'
import Appbar from './Appbar'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Activity() {

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
     

This activity


</div>
</div>
</div>
</div>

        </div>
    )
}
