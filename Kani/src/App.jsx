//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

//function App() {
//  const [count, setCount] = useState(0)

//  return (
//    <>
//      <div>
//        <a href="https://vite.dev" target="_blank">
//          <img src={viteLogo} className="logo" alt="Vite logo" />
//        </a>
//        <a href="https://react.dev" target="_blank">
//          <img src={reactLogo} className="logo react" alt="React logo" />
//        </a>
//      </div>
//      <h1>Vite + React</h1>
//      <div className="card">
//        <button onClick={() => setCount((count) => count + 1)}>
//          count is {count}
//        </button>
//        <p>
//          Edit <code>src/App.jsx</code> and save to test HMR
//        </p>
//      </div>
//      <p className="read-the-docs">
//        Click on the Vite and React logos to learn more
//      </p>
//    </>
//  )
//}
//export default App

//import { useState } from "react";

//function App(){
//  let userList=[
//    {name:"Siva",age:25},
//    {name:"Nivi",age:26},
//    {name:"Kani",age:19},
//    {name:"Lathi",age:19},
//  ]
/*  let [userList,setuserList]=useState([
    {name:'kani',email:'kanisd27@gmail.com',password:'123456'},
  ]
)
  return(
    <>
    <input type="text" placeholder="Enter email" onClick={(e)=>setuserList([...userList,{name:e,target,value}])}/>
    <ul>
      {
        userList.map((user)=>(
           <li key={user.id}>
            {user.name}
          </li>
        ))
      }
    </ul>
    </>
  )
}
export default App*/

/*import { useState} from "react";
function App(){
  let [count,setCount]=useState(0)
  return(
    <div>
      <button onClick={()=>setCount(count+1)}>click</button>
    </div>
  )
}
export default App*/

/*import {StrictMode,useState} from 'react'
function App(){
  let [userList,setUserList]=useState([])
  let [user,setUser]=useState({name:'',email:'',password:''});
  return(
    <>
      <form onSubmit={(e)=>{e.preventDefault()
        setUserList([...userList,{...user}]);
      }
      }>
        <input type="text" placeholder="name" onChange={(e) => {
          user.name = e.target.value;
        }} 
      />
        <input type="text" placeholder="email" onChange={(e) => {
          user.email = e.target.value;
        }} 
      />
      <button type="submit">Submit</button>
    </form>
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        
          {
            userList.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))
          }
        
      </table>
    </div>
 </>
 )
}
export default App */

import React, { useState } from 'react';

function App() {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserList([...userList, { ...user }]);
    setUser({ name: '', email: '', password: '' }); // reset form
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((u, index) => (
              <tr key={index}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
