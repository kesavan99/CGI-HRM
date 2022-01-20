import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from './img/1.png'
export default function Footer() {
    return (
        <div>
            
            <footer  style={{paddingLeft:'11%'}}>
            <section
    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
<div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div>
      <a  className="me-4 text-reset">
        <i> <FacebookIcon/></i>
      </a>
      <a  className="me-4 text-reset">
        <i ><TwitterIcon/></i>
      </a>
      <a  className="me-4 text-reset">
        <i ><LanguageIcon/></i>
      </a>
      <a  className="me-4 text-reset">
        <i ><InstagramIcon/></i>
      </a>
      <a  className="me-4 text-reset">
        <i ><LinkedInIcon/></i>
      </a>
      <a  className="me-4 text-reset">
        <i ><YouTubeIcon/></i>
      </a>
    </div>
  </section>
  <section >
  <div className="container text-center text-md-start mt-5">
  <div className="row mt-3">
  <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
  <h6 class="text-uppercase fw-bold mb-4">
            <img  src={logo}/>Company name
          </h6>
          <p>
          The Confederation of Global Innovators (also known as CGI) is a platform created for the demographic dividend of our nation. We strongly believe that today our country’s youth, which comprises more than 65% of the total population, is the biggest asset for our country.
           
            </p>
  </div>
  </div>

  </div>



  </section>


            </footer>
                   </div>
    )
}
