import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

 async function loginUser(event){
  event.preventDefault()
   const response = await fetch('http://localhost:3000/api/login',{
    method : 'POST',
    headers :{
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
   })
 
   const data  = await response.json();
   
   console.log(data);

 }


  return (
    <>
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser} >

  

  <input
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
   type="email" placeholder="email" />
 
  <br />

  <input
  value={password}
  onChange={(e)=>setPassword(e.target.value)}
   type="password" placeholder="password" />

   <br />
   <br />
 
<input type="submit" value="Register" />

      </form>
      </div>
    </>
  )
}

export default App
