import React from 'react'
import { AiFillPieChart } from "react-icons/ai";
import { MdLeaderboard } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { RxActivityLog } from "react-icons/rx";
export const Sidebar = () => {
  return (
    <div className='bg-white'>
    <ul className='mx-10 my-20 space-y-10'>
        <li ><button className='flex my-2 bg-blue-500 rounded-full pr-10 py-1.5' ><AiFillPieChart className='my-1 mx-2' />Dashboard </button></li>
        <li ><button className='flex my-2' ><MdLeaderboard className='my-1 mx-2' />Leaderboard</button></li>
        <li ><button className='flex my-2' ><FaBusinessTime  className='my-1 mx-2' />Track Progress</button></li>
        <li ><button className='flex my-2' ><GiProgression className='my-1 mx-2' />Exercise Progression </button></li>
        <li ><button className='flex my-2' ><RxActivityLog className='my-1 mx-2' />Activity Log</button></li>
    </ul>
    </div>
  )
}
