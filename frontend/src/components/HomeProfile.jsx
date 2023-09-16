import React, { useEffect, useState } from 'react'

import Home from './Home'
import User from './User'



const HomeProfile = () => {

  return(
    <>
    <Home/>
   <User/> 
    </>
  )

//   const [Tlist, setTlist] = useState([]);
//   const [search, setsearch] = useState([]);
//   const [currentUser, setcurrentUser] = useState(
//     JSON.parse(sessionStorage.getItem('user'))
//   )

//   const fetchUserData = async () =>{
//       const res = await fetch('http://localhost:5000/tournament/getall');
  
//       console.log(res.status);
  
//       if(res.status ===200){
//           const data = await res.json();
//           console.log(data);
//           setTlist(data);
//           setsearch(data);
//       }
//   };
//   useEffect(() => {
//     fetchUserData();
//   }, []);


//   const {LoggedIn, logout} = useUserContext();
//   if(!LoggedIn)
//   return<LandingPage/>
 

//   const displayTournament = () => {
//       if(Tlist.length === 0) return <h1 className='text-center '>No Data Found</h1>

//       return Tlist.map((tournament) => ( <><div className='col-md-3 mb-4 '>
//           <div className='card tournament-card mx-2 mt-3' >
//           <img width={212} height={150} className='mx-3 my-2 rounded-2' src={"http://localhost:5000/"+tournament.image} alt="" />
//               <div className='card-body'>
//                   <h4 className='text-white fw-bold'>{tournament.title}</h4>
//                   <h5 className='text-white'>Players : {tournament.players}  </h5>
//                   <hr className='line'/>
//                   <div className='d-flex text-white mt-1'>
//                       <div> <p>Start Date</p> <p style={{marginTop:'-15px'}}> {tournament.startDate}</p></div>
//                       <div className='ms-auto'> <p >Start Time</p><p style={{marginTop:'-15px'}}>{tournament.startTime}</p></div>
//                   </div>
//                   <h5 className='text-white fw-light'>Platform : {tournament.platform}  </h5>
                  
//               </div>
//               <div className="card-footer line2">
//                   <div className="text-center fs-5"><a href={tournament.link}><button className="btn btn-primary">Join Now</button></a></div>
//               </div>

//           </div>
//       </div> 
//        </>
      
//       ))
//   }

  
//   const filterTournament = (e) =>{
//       const value = e.target.value;
//       setTlist(search.filter((t) =>
//        {return t.title.toLowerCase().includes(value.toLowerCase())
          
//       })
//       );
//   }

 
  
  

//   return(
//     <>
//     <div className='backhome2'>
//     <nav className="navbar navbar-expand-lg bg-dark position-fixed top-0 w-100 z-2 ">
//   <div className="container">
//   <img  width={75} height={45} src={pic} alt=""/>
//     <h1 className="navbar-brand text-white mx-3 fs-2 projectName me-auto" href="#">
//       GameQuests
//     </h1>
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarSupportedContent"
//       aria-controls="navbarSupportedContent"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
//         <li className="nav-item">
//           <Link className="nav-link  links1" to='/home'>
//             HOME
//           </Link>
//         </li>
//         <li className="">
//           <a className="nav-link links1" href="#">
//             BLOGS
//           </a>
//         </li>
//         <li className="nav-item">
//           <Link>
//           <button className="btn btn-danger mx-2 " onClick={logout}>Log Out</button>
//           </Link>
//         </li>
//         <li className='nav-items'>
//           <Link to='/home'  className=''>  <img width={40} height={40} className='mx-2 rounded-circle' src={"http://localhost:5000/"+currentUser.avatar} alt="" />
//           </Link>
           
              
//             </li>
        
//       </ul>
     
//     </div>
//   </div>
// </nav>

       
//         <header>
//             <div className="container py-5 my-2 mt-5 ">
//                 <p className='display-2 text-center fw-bold text-white'>Search Tournaments</p>
//                 <input type="text" className='form-control w-75 m-auto'  onChange={filterTournament} / >
               
//             </div>
//         </header>
//         <div className='container'  >
//             <div className='row mt-3 '>{displayTournament()}</div>
//         </div>
      
//     </div>
//     <User/>
//     </>
//   )
}

export default HomeProfile