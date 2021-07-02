import Select from 'react-select';
import React, { useState, useEffect } from 'react';
import {MDBContainer, MDBTable, MDBTableHead, MDBTableBody,MDBInputGroup, MDBInputGroupElement, MDBBtn,} from 'mdb-react-ui-kit';



export default function Files(props) {
    let Options1 = [{value: 1, label: "warka sdsdang"}, {value: 2, label: "dsad dang"} ,{value: 3, label: "warka ddddang"},{value: 4, label: "warkdsda dang"}]

     return(<section className="files pt-5" >
       <MDBContainer>
       <div className="section-title">
          <span>Original ECU files</span>
          <h2>Original ECU files</h2>
          <p>Find original ECU file by make, model and engine or HW and SW number</p>
        </div>


<div className='select-car mt-3 '>

<div className="row">
<div className="col-md-3"> 
<label className="seletion-label">Choose Make</label>

<Select
label="Single select"
options={Options1}
theme={theme => ({
...theme,
borderRadius: 0,
colors: {
  ...theme.colors,
  primary25: 'orange',
  primary: 'black',
},
})}
/>
</div>
<div className="col-md-3"> 
<label className="seletion-label">Choose Model</label>


<Select
label="Single select"
options={Options1}
theme={theme => ({
...theme,
borderRadius: 0,
colors: {
  ...theme.colors,
  primary25: 'orange',
  primary: 'black',
},
})}
/>
</div>
<div className="col-md-3"> 
<label className="seletion-label">Choose Engine</label>

<Select
label="Single select"
options={Options1}
theme={theme => ({
...theme,
borderRadius: 0,
colors: {
  ...theme.colors,
  primary25: 'orange',
  primary: 'black',
},
})}
/>
</div>
<div className="col-md-3"> 
<a className="call-to-action mt-4" href="#">Find My Car</a>
</div>
</div>


</div>


</MDBContainer>
<MDBContainer>
<div className="table ">
  <div className="row"> 
<div className="col-md-8 text-black">
<h2> Lattest added </h2>
</div>
<div className="col-md-4  pt-0"> 
<div className="search">
<MDBInputGroup className='' >
  
  <MDBInputGroupElement className="form-control " style={{borderRadius: "0px", borderColor: "#000"}} placeholder="Search by HW or SW number:" type='text' />
  <MDBBtn outline className="text-white border border-black bg-black" style={{borderRadius: "0px"}}><i class="fas fa-search-plus"></i></MDBBtn>
</MDBInputGroup>
</div>
</div>
  </div>
<MDBTable small responsive hover striped bordered dark borderColor="black" className="pt-5" style={{color: "#000"}} >
<MDBTableHead className="bg-warning">
  <tr>
    <th scope='col'>#</th>
    <th scope='col'>Make and model</th>
    <th scope='col'>Engine</th>
    <th scope='col'>Power</th>
    <th scope='col'>HW</th>
    <th scope='col'>SW</th>
    <th scope='col'>ECU</th>
    <th scope='col'>Size</th>
    <th scope='col'>Price</th>
    <th scope='col'>Download</th>
    <th scope='col'>Detail</th>


  </tr>
</MDBTableHead>
<MDBTableBody>
  <tr>
    <th scope='row'>1</th>
    <td>Volvo	V50</td>
    <td>2.0TD</td>
    <td>100KW	</td>
    <td>5WS40212G T	</td>
    <td>VO20027000000	</td>
    <td>Siemens	</td>
    <td>448 kB</td>
    <td>7.50 €</td>
    <td className="m-0"><a className="Button" href="#">Buy Now</a></td>
    <td className="m-0"><a className="Button" href="#"><i class="fas fa-search-plus"></i></a></td>
  </tr>
  <tr>
    <th scope='row'>1</th>
    <td>Volvo	V50</td>
    <td>2.0TD</td>
    <td>100KW	</td>
    <td>5WS40212G T	</td>
    <td>VO20027000000	</td>
    <td>Siemens	</td>
    <td>448 kB</td>
    <td>7.50 €</td>
    <td className="m-0"><a className="Button" href="#">Buy Now</a></td>
    <td className="m-0"><a className="Button" href="#"><i class="fas fa-search-plus"></i></a></td>

  </tr>
 
  <tr>
    <th scope='row'>1</th>
    <td>Volvo	V50</td>
    <td>2.0TD</td>
    <td>100KW	</td>
    <td>5WS40212G T	</td>
    <td>VO20027000000	</td>
    <td>Siemens	</td>
    <td>448 kB</td>
    <td>7.50 €</td>
    <td className="m-0"><a className="Button" href="#">Buy Now</a></td>
    <td className="m-0"><a className="Button" href="#"><i class="fas fa-search-plus"></i></a></td>

  </tr>
 
  <tr>
    <th scope='row'>1</th>
    <td>Volvo	V50</td>
    <td>2.0TD</td>
    <td>100KW	</td>
    <td>5WS40212G T	</td>
    <td>VO20027000000	</td>
    <td>Siemens	</td>
    <td>448 kB</td>
    <td>7.50 €</td>
    <td className="m-0"><a className="Button" href="#">Buy Now</a></td>
    <td className="m-0"><a className="Button" href="#"><i class="fas fa-search-plus"></i></a></td>

  </tr>
 
 
</MDBTableBody>
</MDBTable>
</div>
</MDBContainer>

</section>
)}
