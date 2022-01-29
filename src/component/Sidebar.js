import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';


import { Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from "react-router-dom"
import '@coreui/coreui/dist/css/coreui.min.css'
import CIcon from '@coreui/icons-react'
import logo from './img/1.png';
import { CSidebarToggler,CSidebarNav,CSidebarHeader, CSidebarFooter,CSidebarBrand,CSidebar,CNavGroup,CNavTitle,CBadge } from '@coreui/react'
import { cilSpeedometer,cilUser,cilBell,cilGroup,cilLibrary,cilTask,cilRss,cilPaperPlane,cilLineWeight, cilBadge,cilPuzzle,cilBirthdayCake, cilMenu } from '@coreui/icons'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CRow,
  CCol
} from '@coreui/react'
import { makeStyles } from '@mui/styles';

import Appbar from './Appbar';
import { color } from "@mui/system";







const useStyles = makeStyles({
  
  tx:{
    paddingbottom: '505px' 
  }
});









export default function Sidebar() {




  const classes = useStyles();








  return (

    <div >
<div>

  <CSidebar position="fixed show" style={{height:'100%'}} className=" mt-5 bg-info " style={{height:'flex'}} >

  <CSidebarNav  >
  <CNavItem href="/profile">
      <CIcon customClassName="nav-icon" icon={cilUser} />
    Profile
    </CNavItem>
    
    <CNavItem href="/dashboard">
      <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
    Dashboard
    </CNavItem>
    <CNavItem href="/mygroup">
      <CIcon customClassName="nav-icon" icon={cilGroup}  />
      My Group
      <CBadge color="primary ms-auto"></CBadge>
    </CNavItem>
    <CNavItem  href="/gallery"  >
      <CIcon customClassName="nav-icon"  icon={cilLibrary} />
      CGI Gallery
      <CBadge color="primary ms-auto"></CBadge>
    </CNavItem>
    <CNavItem href="/birthday">
      <CIcon customClassName="nav-icon" icon={cilBirthdayCake} />
      Birthday Column
      <CBadge color="primary ms-auto"></CBadge>
    </CNavItem>
    
    <CNavItem href="/publicgroup">
      <CIcon customClassName="nav-icon" icon={cilGroup} />
      Public Group
            <CBadge color="primary ms-auto"></CBadge>
    </CNavItem>
    <CNavItem href="/mytask">
      <CIcon customClassName="nav-icon" icon={cilLineWeight} />
      My Task
      <CBadge color="primary ms-auto"></CBadge>
    </CNavItem>
    <CNavItem href="/notification">
      <CIcon customClassName="nav-icon" icon={cilBell} />
      Notofication
      <CBadge color="primary ms-auto"></CBadge>
    </CNavItem>
    <CNavItem href="/announcement">
      <CIcon customClassName="nav-icon" icon={cilPaperPlane} />
      Announcement
      <CBadge color="primary ms-auto"></CBadge>
    </CNavItem>
    <CNavItem href="/achive">
      <CIcon customClassName="nav-icon" icon={cilBadge} />
      Achivement Score
      <CBadge color="primary ms-auto"></CBadge>
    </CNavItem>
    
    <CNavItem href="/activity">
      <CIcon customClassName="nav-icon" icon={cilTask} />
    Activity
      <CBadge color="primary ms-auto"></CBadge>
    </CNavItem>
    
    <CNavGroup toggler="More">
      <CNavItem href="/feed">
        <CIcon customClassName="nav-icon" icon={cilRss} /> Feeds
      </CNavItem>
      <CNavItem href="/event">
        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Events
      </CNavItem>
    </CNavGroup>
  </CSidebarNav>
  <CSidebarToggler />
  
  
  </CSidebar>



</div>
</div>

)
}
































