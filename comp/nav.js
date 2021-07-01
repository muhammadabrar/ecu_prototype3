import React, { useState, useEffect } from 'react';


import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse, 
  } from 'mdb-react-ui-kit';

export default function Nav(props) {
    const [showBasic, setShowBasic] = useState(false);
    const [navBG, setnavBG] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setnavBG(position);
    };
    useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
    
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
    return(
<>
<section id="topbar" className="d-flex align-items-center">
    <div className="container d-flex justify-content-center justify-content-md-between">
      <div className="contact-info d-flex align-items-center">
      <MDBIcon icon='at' fas /> <a href="mailto:contact@example.com" className="email">info@example.com</a>
      </div>
      <div className="social-links d-none d-md-block">
        <a href="#" className="twitter"><MDBIcon icon='twitter' fab /></a>
        <a href="#" className="facebook"><MDBIcon icon='facebook' fab /></a>
        <a href="#" className="instagram"><MDBIcon icon='instagram' fab /></a>
        <a href="#" className="linkedin"><MDBIcon icon='whatsapp' fab /></a>
      </div>
      </div>
    
  </section>
        <header className="sticky-top ">
        <MDBNavbar  expand='lg' bgColor="primary"  dark className="shadow">
          <MDBContainer container>
            <MDBNavbarBrand href='#'><img src="./logo.png" className="logo"/><b>Tested ECU Solutions</b> 
        </MDBNavbarBrand>
    
            <MDBNavbarToggler
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowBasic(!showBasic)}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
    
            <MDBCollapse navbar show={showBasic}>
              <MDBNavbarNav className='justify-content-end'>
                <MDBNavbarItem>
                  <MDBNavbarLink className={props.page == 'Home'? "active text-black nav_link": "text-white nav_link"}  href='/'>
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink  className={props.page == 'ECU'? "active text-black nav_link": "text-white nav_link"} href='/file'>ECU FILES</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink className={props.page == 'TUNING'? "active text-black nav_link": "text-white nav_link"} href='/tuning'>TUNING FILES</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink className={props.page == 'How'? "active text-black nav_link": "text-white nav_link"} href='/faq'>How to?</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink className={props.page == 'about'? "active text-black nav_link": "text-white nav_link"} href='/about'>About US</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink className={props.page == 'Contact'? "active text-black nav_link": "text-white nav_link"} href='/contact'>Contact US</MDBNavbarLink>
                </MDBNavbarItem>
              
    
                
    
               
              </MDBNavbarNav>
    
              
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        
        </header>
   
    </>)
}