import React from 'react'

function Home() {
  return (
    <div className='flex justify-between '>
    <div className='sm:flex sm:gap-20'>
      <a href="" className='text-blue-800 font-semibold'>Home</a>
      <a href="">About </a>
      <a href="">Top-up</a>
      <a href="">Help</a>
    </div>
    <div className='inline-flex gap-11 items-center'>
      <a href="#" className='font-semibold text-blue-600'>Sign In</a>
      <a href="#" className='bg-white px-8 py-3 shadow-xl rounded-full font-semibold hover:text-blue-600'>Register</a>
    </div>
  </div>
    
  )
}

export default Home