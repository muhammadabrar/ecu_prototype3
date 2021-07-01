import {MDBIcon, MDBContainer, MDBCollapse, MDBBtn, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import React, { useState, useEffect } from 'react';
export default function Faq(props) {



   return( <>
   
   
  
    
<section className="faq">
<div className="section-title">
          <span>Frequently asked questions</span>
          <h2>Frequently asked questions</h2>
        </div>
           <MDBContainer >
           <details open>
  <summary>FAQ 1</summary>
  <div class="faq__content">
    <p>Answer 1</p>
  </div>
</details>
<details>
  <summary>FAQ 2</summary>
  <div class="faq__content">
    <p>Answer 2</p>
  </div>
</details>
<details>
  <summary>FAQ 3</summary>
  <div class="faq__content">
    <p>Answer 3</p>
  </div>
</details>
     
           </MDBContainer>

           </section>
           
      
      
   </>)
}







  
