import React from 'react'
import { useContext } from 'react'
import { useSyncExternalStore } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setUsername] = useState('')

    const [password, setPassword] = useState('')
    
    const {setUser} = useContext(UserContext)

    const handleSubmit  = (e) => {
       e.preventDefault()
       setUser({username, password})
    }
  return (
<div className="w-full h-[400px] flex justify-center items-center  ">

<div className="w-[300px] bg-white h-60 px-9 rounded-lg flex flex-col justify-around items-center border-2 border-gray-500 drop-shadow-lg">

      <h2 className="text-xl font-bold border-2 px-5 border-gray-500 rounded-lg">Login page</h2>

      <input type="text" placeholder='username' 
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      className="block w-full rounded-md px-4 border-2 border-gray-600 drop-shadow-lg"
      />

      <input type="text" placeholder='password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="block w-full rounded-md px-4 border-2 border-gray-600 drop-shadow-lg"
      />

      <button
      className="block  rounded-md px-4 border-2 border-gray-600 drop-shadow-xl" 
      onClick={handleSubmit}>Submit</button>

    </div>

</div>
  )
}

export default Login
