
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import CreatePost from './pages/CreatePost'
import MyBlogs from './pages/MyBlogs'
import Profile from './pages/Profile'
import PostDetails from './pages/PostDetails'
import EditPost from './pages/EditPost'
import {Route,Routes} from 'react-router-dom'
import UserContextProvider from './context/UserContext';
function App() {
  return (
   
    <UserContextProvider>

<Routes>

<Route  exact path='/' element={<Home/>}/>
<Route  exact path='/login' element={<Login/>}/>
<Route  exact path='/register' element={<Register/>}/>
<Route  exact path='/write' element={<CreatePost/>}/>
<Route  exact path='/myBlogs/:id' element={<MyBlogs/>}/>
<Route  exact path='/profile/:id' element={<Profile/>}/>
<Route  exact path='/Post/post/:id' element={<PostDetails/>}/>
<Route  exact path='/edit/:id' element={<EditPost/>}/>

    </Routes>
    </UserContextProvider>
    
   
   
  );
}

export default App;
