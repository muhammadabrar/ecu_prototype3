import React from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBadge,
} from 'mdb-react-ui-kit';

export default function NavTop() {
  return (
      <>
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer >
        <MDBNavbarNav className="justify-content-end" >
          <MDBNavbarItem>
            <MDBNavbarLink href='#'>
              <MDBBadge pill color='danger'>!</MDBBadge>
              <span>
                <MDBIcon fas icon='shopping-cart'></MDBIcon>
              </span>
            </MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
      
    </MDBNavbar>
    
    </>
  );
}