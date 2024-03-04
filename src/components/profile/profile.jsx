import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import "./profile.style.scss"
const Profile = ({fullName,userName}) => {

  

  return (
    <div className='forall'>    
    <div className='orange'><PersonIcon /></div>
    <div className='fortxt'><h1>{fullName}</h1><h2>@{userName}</h2></div>
    </div>
  )
}

export default Profile
