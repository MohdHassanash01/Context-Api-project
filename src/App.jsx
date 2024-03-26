import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {
  return (
   <UserContextProvider>
      <h1 className='text-center py-5 font-bold text-2xl hover:underline duration-100 cursor-pointer'> Context Api Project</h1>
   <Login/>
   <Profile/>
   </UserContextProvider>
  )
}

export default App
