import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Swal from "sweetalert2";  

const UserAuth = ({children}) => {

  const [currentUser, setcurrentUser] = useState(
    JSON.parse(sessionStorage.getItem('user'))
  );

  if(currentUser!=null){
    return children;
  } else {
    Swal.fire({
      icon : 'error',
      title : "OOPs....",
      text : "Please Login to Continue"
    })

    return <Navigate to='/landingpage'/>
  }

}

export default UserAuth