import React,{useContext} from 'react'
import userContext from './context/UserContext'

function Profile() {
    const {names} = useContext(userContext)
  return (
    <div>Profile Name : {names} </div>
  )
}

export default Profile