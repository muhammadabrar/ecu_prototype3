import {MDBIcon} from 'mdb-react-ui-kit';
import React, { useState, useEffect } from 'react';

export default function Intro(props) {
   return( <>
   
   
   <section id="contact" className="contact bg-white">
      <div className="container">

        <div className="section-title">
          <span>Contact</span>
          <h2>Contact</h2>
          <p>feel Free To contact</p>
        </div>

        <div className="row" data-aos="fade-up">
          {/* <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="fas fa-map"></i>
              <h3>Our Address</h3>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div> */}

          <div className="col-lg-12 col-md-12">
            <div className="info-box  mb-4">
              <i className="fas fa-envelope"></i>
              <h3>Email Us</h3>
              <p>contact@example.com</p>
            </div>
          </div>

          {/* <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="fas fa-phone"></i>
              <h3>Call Us</h3>
              <p>+1 5589 55488 55</p>
            </div>
          </div> */}

        </div>

        <div className="row" data-aos="fade-up">

          {/* <div className="col-lg-6 ">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26425.264212015438!2d72.5897166970005!3d34.116703907642865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38defa191164fbc7%3A0x51780d9082757ca7!2sMaini%2C%20Swabi%2C%20Khyber%20Pakhtunkhwa!5e0!3m2!1sen!2s!4v1624433192737!5m2!1sen!2s" frameborder="0" style={{border:0, width: "100%", height: "384px"}} allowfullscreen></iframe>
            
          </div> */}

          <div className="col-lg-12">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
      
   </>)
}