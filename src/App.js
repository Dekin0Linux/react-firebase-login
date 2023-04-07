
import React from 'react'

import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './Profile'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className='backdrop-blur-md bg-white/30 md:w-full h-full  md:py-10 px-10 my-4'>

        <Home/>

          <Routes>
            <Route path='/' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Routes>
      </div>
      
    </Router>
    
  );
}

export default App;
