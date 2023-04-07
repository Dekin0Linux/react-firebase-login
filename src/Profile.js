import React from 'react'
import { useNavigate } from 'react-router-dom';

import { 
 signOut
} from 'firebase/auth';

import {auth} from './firebase'



function Profile() {
  const navigate = useNavigate()

  const logOut = ()=>{
    signOut(auth).then(()=>{
      navigate('/login')
    })
    
  }
  return (
    <div className='text-center'>
      <h1 className='font-bold text-center text-3xl'>Welcome User</h1> 
      <p className='text-green-600'>Login Successful</p>

      <button onClick={logOut} className='bg-blue-500 text-white px-2 py-1 my-2 rounded-lg'>Signout</button>
    </div>
  )
}

export default Profile