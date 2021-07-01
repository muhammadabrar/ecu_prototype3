import React from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from 'mdb-react-ui-kit';

export default function breadcrumb() {
  return (
    <MDBContainer className="p-2">
    <nav className='navbar navbar-light bg-light'>
      <MDBContainer >
        <MDBBreadcrumb>
          <MDBBreadcrumbItem>
            <a href='#'>Home</a>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem>
            <a href='#'>Library</a>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>
            <a href='#'>Data</a>
          </MDBBreadcrumbItem>
        </MDBBreadcrumb>
      </MDBContainer>
    </nav>
    </MDBContainer>
  );
}