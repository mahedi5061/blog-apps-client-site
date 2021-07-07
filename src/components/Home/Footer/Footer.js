import React from "react";
import "./Footer.css";
import Facebook from "../../../Images/Facebook_f_logo_(2019).svg";
import Instagram from "../../../Images/ins.jpg";
import Twitter from "../../../Images/twitter2.png"
const Footer = () => {
  return (
      <div class="page-footer container pt-4 w-full">
      <div class="container-fluid  text-center text-md-left">
        <div class="row">
          <div class="col-md-6 mt-md-0 mt-3 text-secondary">
            <h5 class="text-uppercase">Quick Links</h5><br></br>
            <p class='text-lg font-weight-bold'>F.A.Q.S</p>
            <p class='text-lg font-weight-bold'>Support</p>
            <p class='text-lg font-weight-bold'>Sitemap</p>
            <p class='text-lg font-weight-bold'>Community</p>
          </div>
          {/* <hr class="clearfix d-md-none pb-3"></hr> */}
          <div class="col-md-3 mb-md-0 mb-3">
           <h5 class="text-uppercase text-white">subscribe</h5> 

            <ul class="list-unstyled mt-5 d-flex">
              <li>
                <a href="https://www.facebook.com/"><img src={Facebook} style={{width: '40px',padding:'5px'}}></img></a>
              </li>
              <li>
                <a href="https://www.instagram.com/"><img src={Instagram} style={{width: '40px' ,padding:'5px'}}></img></a>
              </li>
              <li>
                <a href="https://twitter.com/"><img src={Twitter} style={{width: '40px',padding:'5px'}}></img></a>
              </li>
               
            </ul>
          </div>
          <div class="col-md-3 mb-md-0 mb-3 ">
            <h5 class="text-uppercase text-white ">contact us</h5><br></br>

            <ul class="list-unstyled">
              <li>
                <a href="#!" class="text-lg text-white font-weight-bold text-decoration-none">Racecourse, Comilla, Bangladesh</a>
              </li><br></br>
              <li>
                <a href="#!" class="text-lg text-white font-weight-bold text-decoration-none">mahedi5061@gmail.com</a>
              </li><br></br>
              <li>
                <a href="#!" class="text-lg text-white text-decoration-none font-weight-bold">+88-01700772420</a>
              </li>
               
            </ul>
          </div>
         
        </div>
      </div>
      <div class="footer-copyright text-center text-white py-3">
            © 2021 Copyright:
            <a href="https://modest-yonath-57af63.netlify.app/" class="text-blue hover:text-blue text-decoration-none"> Mahedi Hassan Sharif</a>
          </div>
    </div>
    
  );
};

export default Footer;
