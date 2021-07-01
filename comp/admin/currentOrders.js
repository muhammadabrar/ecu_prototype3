import {MDBContainer,MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink, MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';

export default function States(props) {
   return( 
   <>
       <MDBTable small bordered borderColor="primary" >
      <MDBTableHead className="bg-black text-white">
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>First</th>
          <th scope='col'>Last</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row'>1</th>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td colSpan={2}>Larry the Bird</td>
        </tr>
      </MDBTableBody>
    </MDBTable>

 </>
        
      )
}