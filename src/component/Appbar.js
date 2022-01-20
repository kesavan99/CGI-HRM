import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import logo from './img/1.png'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import im from './img/5.jpg'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import LogoutIcon from '@mui/icons-material/Logout';

import UpdateIcon from '@mui/icons-material/Update';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];








const useStyles = makeStyles({
  
  co:{
    color:'#01579b',
    background:'#01579b'
    
  }
});


const ResponsiveAppBar = () => {


  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()








  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };





  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }






  return (
    <AppBar position="fixed"  className=" bg-info" >
   
        <Toolbar disableGutters>
        <img  src={logo}  style={{width:'5%',heigth:'2%'}}/> 
          <Typography
            variant="h6"
            noWrap
           
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            CGI Connect
          </Typography>


<Typography style={{marginLeft:'3%'}}>

Email:  {currentUser.email}


</Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
              
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
          </Box>
          <div  style={{marginRight:'5%'}}>
          <Link to="/update-profile" >
            <UpdateIcon  color='#212121'size="large"/>
          </Link>
          
          
          <Typography>
          Update Profile
          </Typography>
          
      </div>
      <div  style={{marginRight:'5%'}}>
      
          <Link variant="link" onClick={handleLogout}>
        <LogoutIcon>
        
          </LogoutIcon>
          </Link>
         
        <Typography>Log out</Typography>
        </div>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar  src={im}/>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;
