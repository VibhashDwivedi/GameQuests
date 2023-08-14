import React from 'react'
import pic from '../images/GameQuestsLogo.png'
import '../css/createpost.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='bg-dark text-white'>
        <nav className="navbar navbar-expand-lg bg-dark text-white">
  <div className="container">
  <img  width={75} height={45} src={pic} alt=""/>
    <h1 className="navbar-brand text-white mx-3 fs-2 projectName me-auto" href="#">
      GameQuests
    </h1>
   
  <div className="ms-auto">
    <Link to="/landingpage"><button className="btn btn-primary">Login</button></Link>
    <Link to="/signup"><button className="btn btn-primary mx-4">Sign Up</button></Link>
    <Link to="/about"><button className="btn btn-primary">About Us</button></Link>
  </div>
   
  </div>
</nav>

    </div>
  )
}

export default Header