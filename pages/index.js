
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
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse, MDBRow, MDBCol, MDBInput,  MDBCard, MDBTable, MDBTableHead, MDBTableBody,MDBInputGroup,MDBInputGroupText, MDBInputGroupElement,
} from 'mdb-react-ui-kit';
import Select from 'react-select';
import Nav from '../comp/nav'
import Intro from '../comp/landing-intro'
import Services from '../comp/services'
import Files from '../comp/files'
import About from '../comp/about'
import States from '../comp/stats'
import Footer from '../comp/footer'
import Contact from '../comp/contact'
import Feedback from '../comp/feedback'


export default function App() {
  
  

let Options1 = [{value: 1, label: "warka sdsdang"}, {value: 2, label: "dsad dang"} ,{value: 3, label: "warka ddddang"},{value: 4, label: "warkdsda dang"}]
  return (
      <>
     
     <Nav value={200} page={"Home"}/> 
    <Intro />
    
    <div className="main">
<Services />
<span className="line border"></span>
<Files />
<About />
<States />
<Feedback />
<Contact />
<Footer />
    </div>

  
  </>




);
}