import React, { useState } from 'react'
import pic from '../images/GameQuestsLogo.png'
import '../css/createpost.css'
import '../css/home.css'
import { Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import useUserContext from '../UserContext';

const Navbar = () => {

 

 

  const {LoggedIn, logout} = useUserContext();
  
  const [currentUser, setcurrentUser] = useState(
    JSON.parse(sessionStorage.getItem('user'))
  )
  
if(!LoggedIn)
return <LandingPage/> 
  
 console.log(currentUser);
 
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark  ">
  <div className="container">
  <img  width={75} height={45} src={pic} alt=""/>
    <h1 className="navbar-brand text-white mx-3 fs-2 projectName me-auto" href="#">
      GameQuests
    </h1>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link  links1" to='/home'>
            HOME
          </Link>
        </li>
        <li className="">
          <Link className="nav-link links1" to="/blogs">
            BLOGS
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/landingpage'>
          <button className="btn btn-danger mx-2 " onClick={logout}>Log Out</button>
          </Link>
        </li>
        <li className='nav-items'>
          <Link to='/homeprofile'  className=''>  <img width={40} height={40} className='mx-2 rounded-circle' src={"https://game-quests.onrender.com/"+currentUser.avatar} alt="" />
          </Link>
           
              
            </li>
        
      </ul>
     
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar