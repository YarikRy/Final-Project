import React from 'react'
import { NavLink } from 'react-router-dom'

const LogInForm = (props) => {
    const checkIfUserExists = (e, username, password) => {
        e.preventDefault()
        const account = props.users.filter((user) => username === user.username && password === user.password)
        props.setAccount(account)
        console.log(account)
        console.log(props.account)
        props.setIsLoggedIn(true)
        props.setUsername('')
        props.setPassword('')
    }
  return (
    <div className='xl:container mx-auto mb-32'>
        <div className='flex justify-center logInBackground'>
            <h1 className='text-5x1 sm:text-7x1 text-white uppercase pt-12 mt-5'>Log In</h1>
        </div>
        <div className='px-4 sm:w-2/3 lg:w-1/2 mx-auto'>
            <div className='rounded-lg shadow-lg bg-white -mt-24 py-10 md:py-12 px-4 md:px-6'>
                <div className='form-group mb-6'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Username: </label>
                    <input className="form-control" type='text' placeholder='Username...' onChange={(e) => props.setUsername(e.target.value)} value={props.username}/>

                    <label className='block text-gray-700 text-sm font-bold mb-2'>Password: </label>
                    <input className="form-control" type='text' placeholder='Password...' onChange={(e) => props.setPassword(e.target.value)} value={props.password}/>

                    <button className='border rounded py-2 px-2 mt-5 bg-slate-400 font-bold' onClick={(e) => checkIfUserExists(e, props.username, props.password)} >Log In</button>
                </div>
                <NavLink to='/sign-up'>Are you new here? Sign Up!</NavLink>
            </div>
        </div>
    </div>
  )
}

export default LogInForm