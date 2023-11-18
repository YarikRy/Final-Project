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
import Footer from './Components/Footer';
import AllUsers from './Components/AllUsers';

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
      content: updatedContent,
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
          avatar: newUserAvatar,
          content: newContent,
          date: Date(),
          friend: false
        }
      )
    }).then(() => getUsers())
    setNewFirstName('')
    setNewLastName('')
    setNewContent('')
    setNewUserAvatar('')
  }

  return (
    <BrowserRouter>
    <div className="App">
      <NavbarComponent/>

      <Routes>
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
        <Route path="*" element={<h1>NOT FOUND</h1>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
