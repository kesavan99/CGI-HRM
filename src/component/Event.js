import React from 'react';
import  Calendr from './updatedb/Calender';
import Sidebar from './Sidebar'
import Appbar from './Appbar'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Event() {
  return(   <div>

<div className="container">
  <div className="row align-items-start">
<Appbar/>
  </div>
    <div   className="row ">
    
      <Sidebar/>
<div  style={{paddingLeft:'15%',paddingTop:'5%'}}>  
     
    <Calendr/>
    </div>
    </div>
    </div>
  </div>);
}










