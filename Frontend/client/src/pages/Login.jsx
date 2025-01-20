import React ,{useContext, useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import {URL} from '../url.js'
import Footer from '../components/Footer.jsx'

import {UserContext} from '../context/UserContext.jsx' 
function Login() {

  
  const [email, setemail]= useState('');
  const [password, setpassword]= useState("");
  const [err, seterr]= useState(false);
  const {setUser}= useContext(UserContext)
  const navigate= useNavigate();
  
  const handleLogin = async () =>{
  
    try {
      const res= await fetch('/api/auth/login',{
        method:'POST',
        headers:{
          'content-type':'application/json',
        },
        credentials:'include',
        body:JSON.stringify({email:email, password: password})
      })

      if(res.ok){
        const data = await res.json();
        const cookies= res.headers.get('Set-Cookie');
        console.log('Data',data);
        console.log('Cookies',cookies)

        setUser (data)
      }else{
        console.erro('Request failed with status ', res.status)
      }
      navigate('/')

    } catch (error) {
      seterr(true)
      console.log(error)
    }
  
  }
  



  return (
    <div>
    <div className='flex items-center justify-between px-6 md:px-[200px] py-4'>
<h1 className='text-lg font-extrabold md:text-xl'>
<Link to ='/'>Blogosphere</Link>

</h1>

<h3>
<Link to='/register'>Register</Link>
</h3>
    </div>
    <div className='w-full flex justify-center items-center h-[80vh]'>
      <div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]'>
 
 <h1 className='text-xl font-bold text-left'>Login to your account</h1>
 
      
      <input onChange={(e) => setemail(e.target.value)} 
 className='w-full px-4 py-2 border-black outline-0 ' type='email' placeholder='Enter the email'> </input>
      
      <input onChange={(e) => setpassword(e.target.value)} 
 className='w-full px-4 py-2 border-black outline-0 ' type='password' placeholder='Enter the password'> </input>
      
      

<button onClick={handleLogin} className='w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black'>
Reister
</button>


    {
      err && <h3 className='text-sm text-read-500'>Something went wrong</h3>
    }  

<div className='flex items-center justify-center space-x-3'>

<p>
New Here
</p>
<p className='text-gray-500 hover:text-black'>
<Link to='/register'>
Register
</Link>
</p>
</div>

      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default Login
