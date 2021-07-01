import {MDBIcon, MDBContainer,MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink, MDBCardFooter, MDBCardHeader, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn} from 'mdb-react-ui-kit';

export default function States(props) {
   return( 
 <>
 <div class="wrapper">
                <input type="checkbox" id="btn" hidden />
         <label for="btn" class="menu-btn">
         <i class="fas fa-bars"></i>
         <i class="fas fa-times"></i>
         </label>
         <nav id="sidebar">
            <div class="title">
               Side Menu
            </div>
            <ul class="list-items">
               <li><a href="#"><i class="fas fa-home"></i>Home</a></li>
               <li><a href="#"><i class="fas fa-sliders-h"></i>Clients</a></li>
               <li><a href="#"><i class="fas fa-address-book"></i>Services</a></li>
               <li><a href="#"><i class="fas fa-cog"></i>Settings</a></li>
               <li><a href="#"><i class="fas fa-stream"></i>Features</a></li>
               <li><a href="#"><i class="fas fa-user"></i>About us</a></li>
               <li><a href="#"><i class="fas fa-globe-asia"></i>Languages</a></li>
               <li><a href="#"><i class="fas fa-envelope"></i>Contact us</a></li>
               
            </ul>
         </nav>
         </div>
         
</>
        
      )
}