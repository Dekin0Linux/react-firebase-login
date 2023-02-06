import React,{useState} from 'react'
import { FaGoogle,FaApple,FaFacebookF,FaRegEyeSlash } from 'react-icons/fa';
import {
    GoogleAuthProvider, 
    signInWithPopup,
    signInWithEmailAndPassword
} from 'firebase/auth';
import {auth} from '../firebase'

function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const provider = new GoogleAuthProvider();

    const googleSignUp=()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }

    const signup = (e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
        .then(user=>{
            console.log(user)
            setEmail(' ')
            setPassword(' ')
        }).catch(err=>{
            console.log(err)
        })
    }


  return (
        <form className='lg:w-[30%] md:w-[50%]' onSubmit={signup}>
          <div className='bg-sky-100 w-full rounded-lg my-10 p-5 '>
            <input type="email" placeholder='Enter email address' className='outline-0 w-full bg-transparent' onChange={e=>setEmail(e.target.value)}/>
          </div>

          <div className='flex justify-between bg-sky-100 w-90 p-5 rounded-lg my-10 '>
            <input type="password" placeholder='Password' className='outline-0 bg-transparent w-full h-full' onChange={e=>setPassword(e.target.value)}/>
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
            <div className='lg:flex inline-flex justify-between my-10 md:gap-2 gap-2'>
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
        </form>
  )
}

export default Login