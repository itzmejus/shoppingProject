import React from 'react'
import '../Styles/Account.css'
import user from '../media/user.png'
function Account() {
  return (
    <div className='account'>
        <div className='profile'>
       <div className='profile-left'>
        <h1>Christophor</h1>
        <img src={user} alt='profile'/>
       </div>
       <div className='profile-right'>
         <h1>Details</h1>
       </div>
        
        </div>
    </div>
  )
}

export default Account