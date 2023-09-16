import React from 'react'
import Header from './Header'
import '../css/createpost.css'
import { Link } from 'react-router-dom'


const About = () => (
<>
    
    <div className='backhome '>
        <div className="position-fixed w-100 top-0 z-2"> <Header /></div>
   
        <div className='text-center mt-5'>
            <h1 className='text-white display-2 fw-bold mt-5 pt-4'>GameQuests</h1></div>
        <div className="container ">
            <div className="card signupcard line2 p-4  ">
                
                <p className='mx-3 text-white fs-3 fw-light'>Welcome to GameQuests, Your Ultimate Source for Global Game Tournaments!</p>

                <p className='mx-3 text-white fs-4 fw-light'>At GameQuests, we're dedicated to keeping you in the loop about the electrifying world of competitive gaming. Whether you're a casual gamer or an aspiring esports pro, our platform is your go-to destination for all things game tournaments. Our mission is to provide a comprehensive and up-to-date resource that connects you to the most exciting gaming events happening around the globe.</p>
                <p className='mx-3 text-white fs-4 fw-light'>🎮<span className='text-black fw-bold'>Discover Thrilling Competitions:</span> Immerse yourself in the adrenaline-packed universe of esports. From action-packed shooters to strategy-based simulations, we cover a wide spectrum of games that are dominating the competitive scene. Stay informed about the latest tournaments for popular titles like League of Legends, Free Fire, PUBG, Clash Royals, Fortnite, and more!</p>
                <p className='mx-3 text-white fs-4 fw-light'>📢<span className='text-black fw-bold'>Stay Informed: </span>You'll always be in the know about upcoming tournaments,and match schedules. Say goodbye to the fear of missing out and hello to well-planned gaming experiences. </p>
                <p className='mx-3 text-white fs-4 fw-light'>📑<span className='text-black fw-bold'>In Depth Coverage: </span> Dive deep into the details with our comprehensive coverage of each tournament. Access details like start date, time, platform and much more...</p>
                <p className='mx-3 text-white fs-4 fw-light'>🔥<span className='text-black fw-bold'>User-Friendly Interface: </span>Navigating the world of esports has never been easier. Our sleek and intuitive interface allows you to effortlessly browse through tournaments, filter by platform, and customize your viewing experience. Finding the perfect tournament to follow is just a few clicks away.</p>
          
           <Link to="/signup" className='d-flex justify-content-center'><button className="w-50 p-2 btn btn-primary line2 text-white ">JOIN NOW!!</button></Link>
            <div className="container  mt-5">
                <div className=" d-flex">
                   <div><img src={'https://game-quests.onrender.com/card1.jpg'} width={212} height={150} alt=""  className='rounded-2 mx-4'/></div> 
                  <div><img src={'https://game-quests.onrender.com/card6.webp'} width={212} height={150} alt=""  className='rounded-2 mx-3 '/></div>  
                    <img src={'https://game-quests.onrender.com/card3.webp'} width={212} height={150} alt=""  className='rounded-2 mx-3'/>
                    <img src={'https://game-quests.onrender.com/card5.webp'} width={212} height={150} alt=""  className='rounded-2 mx-3'/>
                
                </div>
            </div>

            </div>
        </div>
    </div>
    </>
)

export default About