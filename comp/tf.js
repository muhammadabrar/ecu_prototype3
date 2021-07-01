import {MDBIcon, MDBContainer, MDBCheckbox , MDBInputGroup, MDBInputGroupElement, MDBBtn,} from 'mdb-react-ui-kit';
import React, { useState, useEffect } from 'react';
export default function Tf(props) {



   return( <>
   
   
  
    
<section className="faq">
<div className="section-title">
          <span>TUNE YOUR FILE</span>
          <h2>TUNE YOUR FILE</h2>
        </div>
           <MDBContainer >
           <details open>
  <summary>diesel </summary>
  <div class="faq__content">
  <div className="row bg-white p-3 m-3">
        <div className="col-md-3"><MDBCheckbox name='flexCheck' value='' id='a' label='stage 1 tuning 50 euro' /></div>
        <div className="col-md-3"><MDBCheckbox name='flexCheck' value='' id='s' label='dpf off 20 euro ' /></div>
        <div className="col-md-3"><MDBCheckbox name='flexCheck' value='' id='d' label='dpf egr off combo 30 euro' /></div>
        <div className="col-md-3"><MDBCheckbox name='flexCheck' value='' id='f' label='dtc off 20 euro' /></div>
      </div>
  </div>
</details>
<details>
  <summary>petrol </summary>
  <div class="faq__content">
      <div className="row bg-white p-3 m-3">
        <div className="col-md-3"><MDBCheckbox name='flexCheck' value='' id='q' label='dtc off 20 euro'  /></div>
        <div className="col-md-3"><MDBCheckbox name='flexCheck' value='' id='w' label='dtc off 20 euro'  /></div>
        <div className="col-md-3"><MDBCheckbox name='flexCheck' value='' id='e' label='dtc off 20 euro'  /></div>
        <div className="col-md-3"><MDBCheckbox name='flexCheck' value='' id='r' label='dtc off 20 euro'  /></div>
      </div>
  </div>
</details>
<details>
  <summary>truck/agricalture </summary>
  <div class="faq__content">
  <div className="row bg-white p-3 m-3">
        <div className="col-md-3"><MDBCheckbox name='flexCheck' value='' id='f' label='dtc off 20 euro'  /></div>
        <div className="col-md-3"><MDBCheckbox name='flexCheck' value='' id='g' label='dtc off 20 euro'  /></div>
        <div className="col-md-3"><MDBCheckbox name='flexCheck' value='' id='h' label='dtc off 20 euro'  /></div>
        <div className="col-md-3"><MDBCheckbox name='flexCheck' value='' id='i' label='dtc off 20 euro'  /></div>
      </div>
  </div>
</details>
<details>
  <summary>gearbox </summary>
  <div class="faq__content">
  <div className="row bg-white p-3 m-3">
        <div className="col-md-3"><MDBCheckbox name='flexCheck' value='' id='j' label='dtc off 20 euro'  /></div>
        <div className="col-md-3"><MDBCheckbox name='flexCheck' value='' id='k' label='dtc off 20 euro'  /></div>
        <div className="col-md-3"><MDBCheckbox name='flexCheck' value='' id='l' label='dtc off 20 euro'  /></div>
        <div className="col-md-3"><MDBCheckbox name='flexCheck' value='' id='m' label='dtc off 20 euro'  /></div>
      </div>
  </div>
</details>
<div className="row justify-content-end">
<div className="col-md-4  pt-0"> 
<div className="search">
<MDBInputGroup className='' >
  
  <MDBInputGroupElement className="form-control " value="200" disable style={{borderRadius: "0px", borderColor: "#000"}} placeholder="Search by HW or SW number:" type='text' />
  <MDBBtn outline className="text-white border border-black bg-black" style={{borderRadius: "0px"}}>Next <i class="fas fa-chevron-right"></i></MDBBtn>
</MDBInputGroup>
</div>
</div>
</div>

     
           </MDBContainer>

           </section>
           
      
      
   </>)
}







  
