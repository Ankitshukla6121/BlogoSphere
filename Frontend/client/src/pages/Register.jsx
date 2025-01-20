import React ,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import {URL} from '../url.js'
import Footer from '../components/Footer.jsx'

function Register() {

const [username,setUsername]= useState("");
const [email, setemail]= useState('');
const [password, setpassword]= useState("");
const [err, seterr]= useState(false);

const navigate= useNavigate();

const handleRegister = async () =>{

  try {
    const res= await axios.post(URL+"/api/auth+register",{
      username, email, password
    })
    setUsername(res.data.username)
    setemail(res.data.email)
    setpassword(res.data.password)
    seterr(false)
    navigate('/login')
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
  <Link to='/login'>Login</Link>
</h3>
      </div>
      <div className='w-full flex justify-center items-center h-[80vh]'>
        <div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]'>
   
   <h1 className='text-xl font-bold text-left'>Create an Account</h1>
   <input onChange={(e) => setUsername(e.target.value)} 
   className='w-full px-4 py-2 border-black outline-0 ' type='text' placeholder='Enter the name'> </input>
        
        
        <input onChange={(e) => setemail(e.target.value)} 
   className='w-full px-4 py-2 border-black outline-0 ' type='email' placeholder='Enter the email'> </input>
        
        <input onChange={(e) => setpassword(e.target.value)} 
   className='w-full px-4 py-2 border-black outline-0 ' type='password' placeholder='Enter the password'> </input>
        
        

<button onClick={handleRegister} className='w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black'>
  Reister
</button>


      {
        err && <h3 className='text-sm text-read-500'>Something went wrong</h3>
      }  

<div className='flex items-center justify-center space-x-3'>

<p>
  Already Have an Account
</p>
<p className='text-gray-500 hover:text-black'>
<Link to='/login'>
 Login
</Link>
</p>
</div>

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Register
