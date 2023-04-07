import React,{useState} from 'react'
import image from '../assets/cartoon.png'
import { FaGoogle,FaApple,FaFacebookF,FaRegEyeSlash } from 'react-icons/fa';
import { createUserWithEmailAndPassword ,
    GoogleAuthProvider, 
    signInWithPopup,
} from 'firebase/auth';

import {auth} from '../firebase'
import { Link } from 'react-router-dom';

function Signup() {
    const [username,setUsername] = useState()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [signin,setSignin] = useState(false)
    const [errMsg,setErrorMsg] = useState(null)

    const provider = new GoogleAuthProvider();

    const googleSignUp=()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user)
            // setSignin(true)
            // IdP data available using getAdditionalUserInfo(result)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            
          });
    }

    const clearError = ()=>{
        setErrorMsg('')
    }

    const signup = (e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password)
        .then(user=>{
            console.log(user)
            setEmail('')
            setPassword('')
            setSignin(true)
        }).catch(err=>{
            console.log(err.code)
            setErrorMsg(err.message)
        })
    }
  return (
    <div className='md:flex lg:mt-20 mt-10 '>
    <div className='lg:w-[70%] md:w-[50%]'>
      <h3 className='text-blue-400 font-extrabold lg:text-7xl md:text-4xl text-3xl mb-8 italic'>Welcome to our <br />Community</h3>
      <p className='text-gray-600 text-xl mb-4'>A whole new productive joueny <br /> starts right here</p>
      <img src={image} alt="imageHere" className='lg:w-72 md:w-40 md:ml-56'/>

      <div className='md:flex gap-3 mt-5  inline-flex'>
        <div className=''>
         <img src={require('../assets/google.png')} alt="" className='w-40'/>
        </div>
        <div className=''>
         <img src={require('../assets/apple.png')} alt="" className='w-40'/>
        </div>
      </div>
    </div>
    
        <form className='lg:w-[30%] md:w-[50%]' onSubmit={signup}>
            <h3 className='font-bold text-2xl text-center'>Sign Up</h3>
            {signin ? <div className='p-3 bg-green-400 text-white font-semibold rounded-lg text-lg shadow-lg'>Successful</div>: ''}
            {errMsg && <p className='bg-red-400 p-2 text-white rounded text-lg shadow lg'>{errMsg}</p>}
            
          <div className='bg-sky-100 w-full rounded-lg my-10 p-5 '>
            <input type="email" placeholder='Enter email address' className='outline-0 w-full bg-transparent' onChange={e=>setEmail(e.target.value)} value={email} onKeyDown={clearError}/>
          </div>

          <div className='flex justify-between bg-sky-100 w-90 p-5 rounded-lg my-10 '>
            <input type="password" placeholder='Password' className='outline-0 bg-transparent w-full h-full' onChange={e=>setPassword(e.target.value)} value={password}/>
            <span><FaRegEyeSlash/></span>
          </div>

          <div className='flex justify-between items-center'>
            <div>
             <input type="checkbox" name="" id="" className='mr-3 p-2'/><span>Keep me logged in</span>
            </div>
            <a href="#">Recovery Password</a>
          </div>
         
         <button type="submit" className='w-full bg-blue-600 rounded-lg text-white py-4 shadow-blue-300 shadow-xl my-5 text-center'>SIGN UP</button>
        

          <div className='text-center'>
            <span>Or continue with </span>
          </div>

          <div className=''>
            <div className='lg:flex inline-flex md:gap-y-9 lg:justify-between my-10 md:gap-2'>
              <div className='bg-slate-200 md:px-10 px-10 py-3 rounded-lg shadow-lg hover:bg-blue-100 hover"transition-all' onClick={googleSignUp}>
                <FaGoogle size={30} color={'red'} />
              </div>
              <div className='bg-slate-200 px-10 py-3 rounded-lg shadow-lg'>
                <FaApple size={30} color={'black'} />
              </div>
              <div className='bg-slate-200 px-10 py-3 rounded-lg shadow-lg'>
                <FaFacebookF size={30} color={'blue'} />
              </div>
              
            </div>
          </div>

          <Link to="/login">Already have an account ?</Link>

        </form>
        

        </div>
  )
}

export default Signup