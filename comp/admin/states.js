import {MDBContainer,MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink, MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';

export default function States(props) {
   return( 
   <MDBContainer>
   <div className="states_admin row">
     <div className="col-md-3">
     <div className="state_item">
         <h2 className="info"><i className="fas fa-home"></i> 200</h2>
         <p className="title text-black">pending Order</p>

         
         <MDBDropdown>
      <MDBDropdownToggle color='dark' className="btn-sm states_btn">select</MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem>
          <MDBDropdownLink href="#">Action</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="#">Another action</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="#">Something else here</MDBDropdownLink>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
     </div>
     </div>
     <div className="col-md-3">
     <div className="state_item">
         <h2 className="info"><i className="fas fa-home"></i> 200</h2>
         <p className="title text-black">pending Order</p>
     </div>
     </div>
     <div className="col-md-3">
     <div className="state_item">
         <h2 className="info"><i className="fas fa-home"></i> 200</h2>
         <p className="title text-black">pending Order</p>
     </div>
     </div>
     <div className="col-md-3">
     <div className="state_item">
         <h2 className="info"><i className="fas fa-home"></i> 200</h2>
         <p className="title text-black">pending Order</p>
     </div>
     </div>

   </div>
 </MDBContainer>
        
      )
}