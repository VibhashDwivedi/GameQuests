import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useUserContext from '../UserContext';
import LandingPage from './LandingPage';

const User = () => {

  
   

   
     
      const {LoggedIn} = useUserContext();
      const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem("user"))
      );
      
  if(!LoggedIn)
  return<LandingPage/>


  
  

  return (
    <div className=''>
        <div className="card  user profilecard ">
            <div className="card-body p-4 text-center text-white">
            <img width={80} height={80} className='mx-2 rounded-circle' src={"http://localhost:5000/"+currentUser.avatar} alt="" />
              <h6 className='mt-3'>Name : {currentUser.name}</h6>
              <h6 className='mt-3'>Email :  {currentUser.email}</h6>
              <Link to='/edituser'> <button className="btn btn-primary">Edit</button></Link>
            </div>
            <div className="card-footer d-flex justify-content-center line2 "><Link to='/home'>
            <button className="btn btn-warning text-center ">Close</button>
            </Link></div>
        </div>
    </div>
  )
}

export default User 
