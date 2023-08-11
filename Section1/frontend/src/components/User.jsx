import React, { useState } from 'react'

const User = () => {

    const [currentUser, setcurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
      );
     

  return (
    <div className=''>
        <div className="card bg-secondary user">
            <div className="card-body p-4 text-center">
            <img width={80} height={80} className='mx-2 rounded-circle' src={"http://localhost:5000/"+currentUser.avatar} alt="" />
              <h6 className='mt-3'>{currentUser.name}</h6>
              <h6 className='mt-3'> {currentUser.email}</h6>
            </div>
        </div>
    </div>
  )
}

export default User 
