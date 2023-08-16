import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import { Toaster } from 'react-hot-toast';
import { UserProvider } from './UserContext';
import Error from './components/Error';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Navbar from './components/Navbar';
import User from './components/User';
import HomeProfile from './components/HomeProfile';
import Create from './components/Create';
import EditUser from './components/EditUser';
import About from './components/About';
import Blogs from './components/Blogs';
import UserAuth from './UserAuth';



function App() {
return (
    <div> 
    <Toaster position='top-center'/>
<BrowserRouter>
<UserProvider>
<Routes>
<Route path='/' element={<LandingPage/>}></Route>
  <Route path='landingpage' element={<LandingPage/>}></Route>
  <Route path='signup' element={<SignUp/>}></Route>
  <Route path='navbar' element={<UserAuth><Navbar/></UserAuth>}></Route>
  <Route path='home' element={<UserAuth><Home/></UserAuth>}></Route>
  <Route path='homeprofile' element={<UserAuth><HomeProfile/></UserAuth>}></Route>
  <Route path='user' element={<UserAuth><User/></UserAuth>}></Route>
  <Route path='edituser' element={<UserAuth><EditUser/></UserAuth>}></Route>
  <Route path='about' element={<About/>}></Route>
  <Route path='blogs' element={<UserAuth><Blogs/></UserAuth>}></Route>
  
  {/* <Route path='create' element={<Create/>}></Route> */}
 
  <Route path='*' element={<Error/>}></Route>

</Routes>
</UserProvider>
</BrowserRouter>

    </div>
    
  );
}

export default App;