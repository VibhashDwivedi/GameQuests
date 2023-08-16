import React, { useState } from 'react'
import {Navigate} from 'react-router-dom'
import Swal from 'sweetalert2';

export const UserAuth = ({childern}) => {

    

     const [currentUser, setcurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
     );
     

     if(currentUser!== null)
     return childern
    else{

        Swal.fire({
            icon:'error',
            title:'Oops...',
            text:'You are not Logged In'
        })
        return <Navigate to='/landingpage'/>
    }
}

export default UserAuth