import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'
import FriendsPage from './Components/FriendsPage';
import HomePage from './Components/HomePage';
import PostsPage from './Components/PostsPage';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import NavbarComponent from './Components/Navbar';
import AllUsers from './Components/AllUsers';
import LogInForm from './Components/LogInForm';
import Profile from './Components/Profile';
import SignUp from './Components/SignUp';

function App() {

  //STATE FOR USERS AND FORMS
  const USERS_ENDPOINT = 'http://localhost:3005/users'

  
  const [users, setUsers] = useState([])

  const [show, setShow] = useState(false)

  const [newFirstName, setNewFirstName] = useState('')
  const [newLastName, setNewLastName] = useState('')
  const [newContent, setNewContent] = useState('')
  const [newUserAvatar, setNewUserAvatar] = useState('')

  const [updatedFirstName, setUpdatedFirstName] = useState('')
  const [updatedLastName, setUpdatedLastName] = useState('')
  const [updatedContent, setUpdatedContent] = useState('')

  // STATE FOR USER LOGIN INFO

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [account, setAccount] = useState([{}])

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')






  const getUsers = async () => {
    const resp = await fetch(USERS_ENDPOINT)
    const json = await resp.json()
    setUsers(json)
  }

  useEffect(() => {
    getUsers()
  })

  const deleteUser = (id) => {
    fetch(`${USERS_ENDPOINT}/${id}`, {
      method: 'DELETE'
    }).then(() => getUsers())

  }

  const updateUser = (e, userObject) => {

    e.preventDefault()

    let updatedUserObject = {
      ...userObject,
      first_name: updatedFirstName,
      last_name: updatedLastName,
      posts: [{
        content: updatedContent,
      }]
    }

    console.log(userObject.id)

    fetch(`${USERS_ENDPOINT}/${userObject.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updatedUserObject)
    }).then(() => getUsers())

    setUpdatedFirstName('')
    setUpdatedLastName('')
    setUpdatedContent('')
  }

  const updateFriend = (e, userObject) => {

    e.preventDefault()

    let updatedUserObject = {
      ...userObject,
      friend: !userObject.friend,
    }

    console.log(userObject.id)

    fetch(`${USERS_ENDPOINT}/${userObject.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updatedUserObject)
    }).then(() => getUsers())
  }

  const postNewUser = (e) => {
    e.preventDefault()
    fetch(USERS_ENDPOINT, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(
        {
          first_name: newFirstName,
          last_name: newLastName,
          username: username,
          password: password,
          avatar: newUserAvatar,
          posts: [{
            
          }],
          friend: false
        }
      )
    }).then(() => getUsers())
    setNewFirstName('')
    setNewLastName('')
    setPassword('')
    setUsername('')
    setNewContent('')
    setNewUserAvatar('')
  }

  return (
    <div className="App">
      <NavbarComponent setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        {isLoggedIn ? 
        <>

        <Route path="/" element={<HomePage 
        users={users} 
        setUsers={setUsers} 
        newFirstName={newFirstName} 
        newLastName={newLastName}
        newContent={newContent}
        newUserAvatar={newUserAvatar}
        setNewFirstName={setNewFirstName}
        setNewLastName={setNewLastName}
        setNewContent={setNewContent}
        setNewUserAvatar={setNewUserAvatar}
        postNewUser={postNewUser}
        show={show}
        setShow={setShow}
        updateUser={updateUser}
        setUpdatedFirstName={setUpdatedFirstName}
        setUpdatedLastName={setUpdatedLastName}
        setUpdatedContent={setUpdatedContent}
        updatedFirstName={updatedFirstName}
        updatedLastName={updatedLastName}
        updatedContent={updatedContent}
        deleteUser={deleteUser}
        updateFriend={updateFriend}
        account={account}
        />}/>


        <Route path="/friends" element={<FriendsPage 
        users={users}
        updateFriend={updateFriend}
        />}/>


        <Route path="/posts" element={<PostsPage 
        users={users} 
        setUsers={setUsers} 
        newFirstName={newFirstName} 
        newLastName={newLastName}
        newContent={newContent}
        newUserAvatar={newUserAvatar}
        setNewFirstName={setNewFirstName}
        setNewLastName={setNewLastName}
        setNewContent={setNewContent}
        setNewUserAvatar={setNewUserAvatar}
        postNewUser={postNewUser}
        />}/>


        <Route path='/users' element={<AllUsers 
        users={users}
        updateFriend={updateFriend}
        />}/>

        <Route path='/profile' element={<Profile 
        account={account}
        />}/>


        <Route path="*" element={<h1>NOT FOUND</h1>}/> 
        
        </> 

        : 
        
        <>
        <Route path='/' element={<LogInForm
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        users={users}
        setAccount={setAccount}
        account={account}
        />}/>
        
        <Route path='/sign-up' element={<SignUp 
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        newFirstName={newFirstName} 
        newLastName={newLastName}
        setNewFirstName={setNewFirstName}
        setNewLastName={setNewLastName}
        setNewUserAvatar={setNewUserAvatar}
        newUserAvatar={newUserAvatar}
        postNewUser={postNewUser}
        />} />
        </>
        }
        </Routes>
    </div>
  );
}

export default App;
