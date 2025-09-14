import { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import { Routes, Route} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='w-screen min-h-screen bg-[#0D0D0D] flex flex-col'> 

       <Navbar
         
       isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

       <Routes>

          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />}/>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
          <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />}/>
          <Route path="/dashboard" element={
             <PrivateRoute isLoggedIn={isLoggedIn}>
                 <Dashboard />
             </PrivateRoute>
                
            
          }/>



       </Routes>

       <ToastContainer/>



      
    </div>
  )
}

export default App
