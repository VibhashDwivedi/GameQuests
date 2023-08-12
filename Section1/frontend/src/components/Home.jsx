import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import LandingPage from './LandingPage';
import useUserContext from '../UserContext';

const Home = () => {


    const date = new Date();
    const [Tlist, setTlist] = useState([]);
    const [search, setsearch] = useState([])

    const fetchUserData = async () =>{
        const res = await fetch('http://localhost:5000/tournament/getall');
    
        console.log(res.status);
    
        if(res.status ===200){
            const data = await res.json();
            console.log(data);
            setTlist(data);
            setsearch(data);
        }
    };
    useEffect(() => {
      fetchUserData();
    }, []);


    const {LoggedIn} = useUserContext();
    if(!LoggedIn)
    return<LandingPage/>
   

    const displayTournament = () => {
        if(Tlist.length === 0) return <h1 className='text-center '>No Data Found</h1>

        return Tlist.map((tournament) => (<><div className='col-md-3 mb-4 '>
            <div className='card tournament-card mx-2 mt-3' >
            <img width={212} height={150} className='mx-3 my-2 rounded-2' src={"http://localhost:5000/"+tournament.image} alt="" />
                <div className='card-body'>
                    <h4 className='text-white fw-bold'>{tournament.title}</h4>
                    <h5 className='text-white'>Players : {tournament.players}  </h5>
                    <hr className='line'/>
                    <div className='d-flex text-white mt-1'>
                        <div> <p>Start Date</p> <p style={{marginTop:'-15px'}}> {tournament.startDate}</p></div>
                        <div className='ms-auto'> <p >Start Time</p><p style={{marginTop:'-15px'}}>{tournament.startTime}</p></div>
                    </div>
                    <h5 className='text-white fw-light'>Platform : {tournament.platform}  </h5>
                    
                </div>
                <div className="card-footer line2">
                    <div className="text-center fs-5"><a href={tournament.link}><button className="btn btn-primary">Join Now</button></a></div>
                </div>

            </div>
        </div> 
         </>
        
        ))
    }

    
    const filterTournament = (e) =>{
        const value = e.target.value;
        setTlist(search.filter((t) =>
         {return t.title.toLowerCase().includes(value.toLowerCase())
            
        })
        );
    }


  return (
    <div className='backhome2'>
       <Navbar/>
       
        <header>
            <div className="container py-5 my-2 ">
                <p className='display-2 text-center fw-bold text-white'>Search Tournaments</p>
                <input type="text" className='form-control w-75 m-auto'  onChange={filterTournament} / >
               
            </div>
        </header>
        <div className='container'  >
            <div className='row mt-3 '>{displayTournament()}</div>
        </div>
      
    </div>
  )
}

export default Home