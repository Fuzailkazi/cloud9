import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
    console.log("hii");
  };
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadlow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>FINCALTO</h1>
          <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platforms</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className=' px-8 py-3 border hover:bg-indigo-600 hover:text-white bg-transparent text-black mr-4'>
            Sign In
          </button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>
        <div className='md:hidden hover:cursor-pointer' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className='border-b-2 border-zinc-300 w-full cursor-pointer'>
          Home
        </li>
        <li className='border-b-2 border-zinc-300 w-full cursor-pointer'>
          Anout
        </li>
        <li className='border-b-2 border-zinc-300 w-full cursor-pointer'>
          Support
        </li>
        <li className='border-b-2 border-zinc-300 w-full cursor-pointer'>
          Platforms
        </li>
        <li className='border-b-2 border-zinc-300 w-full cursor-pointer'>
          Pricing
        </li>

        <div className='flex flex-col my-4'>
          <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4 hover:bg-indigo-600 hover:text-white'>
            Sign In
          </button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
