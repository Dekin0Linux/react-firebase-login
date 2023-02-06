
import React from 'react'
import image from './assets/cartoon.png'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {

  return (
    <div>
      <div className='backdrop-blur-md bg-white/30 md:w-full h-full lg:px-60 md:py-10 px-5 my-4'>
        <Home/>

        <div className='md:flex lg:mt-20 mt-10 '>
          <div className='lg:w-[70%] md:w-[50%]'>
            <h3 className='text-blue-400 font-extrabold lg:text-7xl md:text-4xl text-3xl mb-8 italic'>Welcome to our <br />Community</h3>
            <p className='text-gray-600 text-xl mb-4'>A whole new productive joueny <br /> starts right here</p>
            <img src={image} alt="imageHere" className='lg:w-72 md:w-40 md:ml-56'/>

            <div className='md:flex gap-3 mt-5  inline-flex'>
              <div className=''>
               <img src={require('./assets/google.png')} alt="" className='w-40'/>
              </div>
              <div className=''>
               <img src={require('./assets/apple.png')} alt="" className='w-40'/>
              </div>
            </div>
          </div>

          {/* <Login/> */}
          <Signup/>
          
        </div>
      </div>
    </div>
    
  );
}

export default App;
