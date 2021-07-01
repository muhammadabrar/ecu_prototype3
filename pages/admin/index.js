
import React, { useState, useEffect } from 'react';

import Select from 'react-select';
import Nav from '../../comp/admin/navtop'
import Sidebar from '../../comp/admin/sidebar'

import States from '../../comp/admin/states';
import Breadcrumb from '../../comp/admin/breadcrumb';
import Orders from '../../comp/admin/currentOrders';




export default function Login() {
  

  return (
      <>
       
<Sidebar />
<Nav />
<Breadcrumb />
     
      <States />
      <div className="container mt-5">
      <div className="row">
        
          <div className="col-md-9"><Orders /></div>
          <div className="col-md-3"><Orders /></div>
          </div>
      </div>
     
  
  
  </>
);
}