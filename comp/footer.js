import {MDBIcon, MDBContainer} from 'mdb-react-ui-kit';
import React, { useState, useEffect } from 'react';

export default function Footer(props) {
   return( <>
   
   
   <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-md-6">
            <div class="footer-info">
              <a href="/" className="text-white"><h3><u><b>Tested-ECU Solutions</b></u></h3></a>
              <p><b>Tested-ECU Solutions</b> is supplier of high quality custom remapped tuning software files for almost all the popular petrol and diesel vehicles.</p>

              <div class="social-links mt-3">
                <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
                <a href="#" class="facebook"><i class="fab fa-facebook"></i></a>
                <a href="#" class="instagram"><i class="fab fa-instagram"></i></a>
                <a href="#" class="google-plus"><i class="fab fa-whatsapp"></i></a>
              </div>
            </div>
          </div>

          <div class="col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="fas fa-chevron-right"></i> <a href="/">Home</a></li>
              <li><i class="fas fa-chevron-right"></i> <a href="/about">About us</a></li>
              <li><i class="fas fa-chevron-right"></i> <a href="#">Contact us</a></li>
              <li><i class="fas fa-chevron-right"></i> <a href="#">Privacy policy</a></li>
              <li><i class="fas fa-chevron-right"></i> <a href="#">FAQ</a></li>

            </ul>
          </div>

          <div class="col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="fas fa-chevron-right"></i> <a href="#">ECU FILES</a></li>
              <li><i class="fas fa-chevron-right"></i> <a href="#">TUNING FILES</a></li>
             
            </ul>
          </div>


        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Day</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        Designed by <a href="https://bootstrapmade.com/">Muhammad Abrar</a>
      </div>
    </div>
  </footer>
      
      
   </>)
}