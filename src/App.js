import logo from './logo.svg';
import './App.css';
import Form from './component/Form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import List from './component/List';

function App() {
const [users,setUsers]=useState([]);
const[userEdit,setUsersEdit]=useState(null);
useEffect(()=>{
axios.get('https://users-crud1.herokuapp.com/users/')
.then(res=>setUsers(res.data));
},[]);
console.log(users)
const getUsers=()=>{
  axios.get('https://users-crud1.herokuapp.com/users/')
.then(res=>setUsers(res.data));

};
const addUser=user=>{
  axios.post('https://users-crud1.herokuapp.com/users/',user)
  .then(()=>getUsers())
};
const selectUser=user=>setUsersEdit(user);
const updateUser=userInfo=>{
  axios.put(`https://users-crud1.herokuapp.com/users/${userInfo.id}/`,userInfo)
  .then(()=>getUsers());
};
const removeUser=id=>{
  axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
  .then(()=>getUsers());
};
  return (
    <div className="App">
      <Form addUser={addUser} userEdit={userEdit} selectUser={selectUser} updateUser={updateUser}/>
      <List users={users} removeUser={removeUser} selectUser={selectUser}/>
    </div>
  );
}

export default App;
