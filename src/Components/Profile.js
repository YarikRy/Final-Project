import React from 'react'

const Profile = (props) => {
  return (
    <div className='container mx-auto'>
        <div className='flex justify-center flex-col logInBackground'>
            <img className='rounded border profileImg' src={props.account[0].avatar}/>
            <h1 className='text-5x1 sm:text-7x1 text-white uppercase'>{`${props.account[0].first_name} ${props.account[0].last_name}`}</h1>
            <h1 className='text-5x1 sm:text-7x1 text-white'>{`@${props.account[0].username}`}</h1>
        </div>
    </div>
  )
}

export default Profile