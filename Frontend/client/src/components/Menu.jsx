import React from 'react'
import { UserContext } from '../context/UserContext'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'
import {useContext} from 'react';
function Menu() {

const {user}= useContext(UserContext);

const {setUser} = useContext(UserContext);
const navigate= useNavigate()

const handleLogout= async()=>{
  try{
  const res= await axios.get("/api/auth/logout",{withCredentials:true})
  setUser(null)
  navigate('/login')
  }
  catch(err){
    console.log(err);
  }
}

  return (
    <div className='bg-black w-[200px] z-10 flex flex-col items-start absolute top-12 right-6 md:right-32
     roudedmd p-4 space-y-4'>
      
{user && <h3 className='cursor-pointer text-white-sm hover:text-gray-500'>
  <Link to='/login'>Login</Link>
  </h3>}

  {user && <h3 className='cursor-pointer text-white-sm hover:text-gray-500'>
  <Link to='/register'>Register</Link>
  </h3>}
  {user && <h3 className='cursor-pointer text-white-sm hover:text-gray-500'>
  <Link to={'/profile/'+ user._id}>Profile</Link>
  </h3>}

  {user && <h3 className='cursor-pointer text-white-sm hover:text-gray-500'>
  <Link to={'/write'}>write</Link>
  </h3>}

  {user && <h3 className='cursor-pointer text-white-sm hover:text-gray-500'>
  <Link to={'/myblogs/'+ user._id}>My Blogs</Link>
  </h3>}
  {user && <h3 className='cursor-pointer text-white-sm hover:text-gray-500' onClick>={handleLogout}
    Logout
  </h3>}
    </div>
  )
}

export default Menu
