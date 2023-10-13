import React from 'react'

function Navbar() {
  return (
  <div className='flex  justify-between p-4 z-[100] absolute w-full' >
        <h1 className=' text-red-600 font-extrabold text-5xl p-2 cursor-pointer'>NETFLIX</h1>
        <div>
            <button className='px-6 py-2 rounded cursor-pointer text-white'>Sign In</button>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
        </div>
  </div>
  );
}

export default Navbar