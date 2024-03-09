import React from 'react'
import { IoSearch } from "react-icons/io5";
import { IoFlag } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
export const Navbar = () => {
  return (
    <nav className='flex justify-between space-x-20 py-4 px-10 bg-white'>
        <div className='text-3xl text-blue-800'>
            Dashboard
        </div>
        <div className='flex text-lg'>
            <IoSearch className='mt-2 mr-2'/><input className='h-6 bg-gray-100 rounded-lg pl-5  text-sm py-4' type="text" placeholder='Search Here...'/>
        </div>
        <div className='flex'>
            <IoFlag className='mt-1 mr-2 text-xl' />
            <select className='h-6'>
            <option>IND</option>
            </select>
        </div>
        <div>
            <IoNotifications className='mt-1 mr-2 text-xl' />
        </div>
        <div className='flex'>
            <img src="./bird.webp" className='h-7 w-7 rounded-lg' />
            <div>
                <div className='text-sm mx-1 -my-1'>Prem</div>
                <div className='text-xs mx-1'>Admin</div>
            </div>
            
        </div>
    </nav>
  
  )
}
