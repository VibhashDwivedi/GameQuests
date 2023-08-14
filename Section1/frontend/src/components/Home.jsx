import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import LandingPage from './LandingPage';
import useUserContext from '../UserContext';

const Home = () => {


    const current = new Date();
    console.log(current.getMonth());
    const date = current.getDate();
    const month = current.getMonth();
    console.log(month);
   // const checkbox = useRef();
   console.log(date)
    const [check, setcheck] = useState(false)
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
        

        if(Tlist.length === 0) return <h1 className='text-center text-white '>No Data Found</h1>

       else{ 
        return Tlist.map((tournament) =>   (<> <div className='col-md-3 mb-4 '>
            <div className='card tournament-card mx-2 mt-3' >
            <img width={212} height={150} className='mx-3 my-2 rounded-2' src={"http://localhost:5000/"+tournament.image} alt="" />
                <div className='card-body'>
                    <h4 className='text-white fw-bold'>{tournament.title}</h4>
                    <h5 className='text-white'>Players : {tournament.players}  </h5>
                    <hr className='line'/>
                    <div className='d-flex text-white mt-1'>
                        <div> <p>Start Date</p> <p style={{marginTop:'-15px'}}> {`${tournament.startDate}th ${tournament.startMonth}`}</p></div>
                        <div className='ms-auto'> <p >Start Time</p><p style={{marginTop:'-15px'}}>{tournament.startTime}</p></div>
                    </div>
                    <h5 className='text-white fw-light'>Platform : {tournament.platform}  </h5>
                    
                </div>
                <div className="card-footer line2">
                    <div className="text-center fs-5"><a href={tournament.link}><button className="btn btn-primary">Join Now</button></a></div>
                </div>

            </div>
        </div> 
          </>)
        
       )
    }
    
    

    }
   

    const handleChange =(e)=>{
        setcheck(!check);
    }






    const filterTournamentPlatform = (e) =>{
        // const value = e.target.value;
        setTlist(search.filter((t) =>{
            if(!check) 
            return t.platform==='PC'
        else 
        return t.platform==='PC'||t.platform==='Mobile'
        
     } )
        );
    }
    const filterTournamentPlatform2 = (e) =>{
       // const value = e.target.value;
        setTlist(search.filter((t) =>{
            if(!check) 
            return t.platform.toLowerCase()==='Mobile'.toLowerCase()
        else 
        return t.platform==='PC'||t.platform==='Mobile'
        
     } )
        );
    }
    const filterTournamentDate = (e) =>{
       // const value = e.target.value;
        setTlist(search.filter((t) =>{
            if(!check) 
            return t.startDate<date
        else 
            return t.startDate>=date||t.startDate<date
        
     } ));
    }
    const filterTournamentDate2 = (e) =>{
       // const value = e.target.value;
        setTlist(search.filter((t) =>{
            if(!check) 
            return t.startDate>=date
        else 
            return t.startDate>=date||t.startDate<date
        
     } ));
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
        <div className='position-fixed w-100 z-2 top-0'> <Navbar/></div>
      
       
        <header>
            <div className="container py-5 my-3 mt-5 ">
                <p className='display-2 text-center fw-bold text-white'>Search Tournaments</p>
                <input type="text" className='form-control w-75 m-auto'  onChange={filterTournament} / >
                   
                    <div className="container w-75 mt-4">
                    <div className='d-flex'>
                        <button className="btn btn-outline-primary rounded-5 line2" style={{marginRight:'7px'}}>
                        <h5 htmlFor="" className='text-white mx-2 mt-1'>Filters</h5> 
                        </button>

                    
                    <button className="btn btn-outline-primary rounded-5 mx-2 form-check form-switch text-white fw-bold line2"><input type="checkbox" name="pc"  className='mx-1 form-check-input' onChange={filterTournamentPlatform} onClick={handleChange} />PC</button>
                    <button className="btn btn-outline-primary rounded-5 mx-2 form-check form-switch text-white fw-bold line2"><input type="checkbox"  name="pc"   className='mx-1 form-check-input' onChange={filterTournamentPlatform2} onClick={handleChange}/>Mobile</button>
                    <button className="btn btn-outline-primary rounded-5 mx-2 form-check form-switch text-white fw-bold line2"><input type="checkbox"  name="pc" className='mx-1 form-check-input' onChange={filterTournamentDate} onClick={handleChange}/>Expired</button>
                    <button className="btn btn-outline-primary rounded-5 mx-2 form-check form-switch text-white fw-bold line2"><input type="checkbox"  name="pc" className='mx-1 form-check-input' onChange={filterTournamentDate2} onClick={handleChange}/>Active</button>
                    
                    </div>
                    </div>
                   
             
            </div>
        </header>
        <div className='container'  >
            <div className='row mt-3'  >{displayTournament()}</div>
        </div>
      
    </div>
  )
}

export default Home