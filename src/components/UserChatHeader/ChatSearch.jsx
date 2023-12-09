import React from 'react'
import { MdAlternateEmail } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { MdOutlineBookmarkBorder } from "react-icons/md";

function ChatSearch() {
    return (
        <>
            <div className='flex py-3 px-3 justify-between  bg-slate-900  border border-l-0 border-t-0 border-stone-800 text-zinc-600 '>
                <div className=' flex items-center gap-5 '>
                    <div className='relative'>
                        <img className='w-14 border-2 border-white-800  h-14 object-cover  hover:text-white cursor-pointer rounded-full' src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png' alt=''></img>
                        <div className=' absolute top-1 right-1 bg-green-500 h-3 w-3 rounded-full'>

                        </div>
                    </div>
                    <h1 className='text-xl font-semibold cursor-pointer text-white '> Dhruv12.gmail.com</h1>

                </div>
                <div className='flex justify-between items-center gap-3 '>
                    <input className='py-2 w-64 px-3 text-white border-neutral-500  italic font-medium  outline-none bg-slate-800 items-center  border rounded-xl' placeholder='Search messsage...'></input>
                    <div className='flex gap-4 '>
                        <MdAlternateEmail className='text-neutral-400 cursor-pointer text-xl hover:text-white' />
                        <MdOutlineBookmarkBorder className='text-neutral-400 cursor-pointer text-xl hover:text-white' />
                        <CiMenuKebab className='text-neutral-400 cursor-pointer text-xl hover:text-white' />

                    </div>
                </div>
            </div>

        </>
    )
}

export default ChatSearch