import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    if (!user) return <div 
    className=" w-[300px] h-20  text-center text-xl font-semibold bg-gray-400 py-4 text-black m-auto rounded-lg"
    >please login : </div>

    return (
        <>
    <div
    className=" w-[300px] h-20  text-center text-xl font-semibold bg-gray-400 py-4 text-black m-auto rounded-lg drop-shadow-2xl"
    >Welcome : {user.username}, {user.password}</div>



</>
    )

}

export default Profile
