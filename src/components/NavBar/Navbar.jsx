import React from 'react'
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { TbInfoSquareRoundedFilled } from "react-icons/tb"
import UserProfile from '../Models/UserProfile';

function Navbar() {
  return (
    <>
      <div style={{zIndex:1000}} className='flex justify-between relative items-center p-2   bg-slate-900  border border-l-0 border-slate-700 text-zinc-600 '>
        <div className='px-3 flex gap-3 items-center'>
          <div className=' text-xl cursor-pointer text-white  '>
            <BsEmojiSmileFill />
          </div>
          <div className=' text-xl font-semibold cursor-pointer text-white '>
            Chat App
          </div>
        </div>
        <div className=''>
          <ul className='flex items-center gap-3'>
            <li className=' text-xl hover:text-white cursor-pointer'><IoNotifications className='' /></li>
            <li className=' text-xl  hover:text-white cursor-pointer'> <TbInfoSquareRoundedFilled /></li>
            <li>
              <div className='p-3 flex items-center gap-3 '>
                <img className='w-12  h-12 object-cover  hover:text-white cursor-pointer rounded-full' src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png' alt=''></img>
              <div>
              <h1 className=' text-sm font-medium cursor-pointer text-white '> <UserProfile/> </h1>
              <small className='text-xs'>madhavsharma.2414@gmail.com</small>
              </div>
              </div>
              <div>
                
              </div>
            </li>
          </ul>
        </div>

      </div>

    </>
  )
}

export default Navbar