import React, { useState } from 'react'
import '../App.css'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    return (
    <div className='searchbox'>
        <input type="text" placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>
        <button onClick={()=>navigate(`/user/${username}`)}>Search</button>
        <Outlet/>
    </div>
  )
}

export default Home