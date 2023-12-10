import React, { useState } from 'react'
import { MdHomeFilled } from "react-icons/md";
import {  MdSunny, MdSettings } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoIosMoon } from "react-icons/io";
function Sidebar() {
    const [theme, setTheme] = useState('dark')
    const changeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    return (
        <>
            <div className=' flex flex-col justify-between h-48 h-screen border border-l-0 border-b-0 border-slate-700 bg-slate-900  w-16 p-4 text-zinc-600 '>
                <div className='pt-32'>
                    <ul className=''>
                        <li className='py-5 text-xl hover:text-white cursor-pointer   '> <MdHomeFilled /></li>
                        <li className='py-5 text-xl hover:text-white cursor-pointer '><MdSettings /></li>
                        <li className='py-5 text-xl hover:text-white cursor-pointer '> <FaUser /></li>
                    </ul>
                </div>
                <div className='' onClick={changeTheme}>
                    <ul >
                        <li className=' text-xl hover:text-white cursor-pointer  '>
                            {
                                theme === "dark" ? <MdSunny /> : <IoIosMoon />
                            }
                        </li>
                    </ul>
                </div>

            </div>
        </>

    )
}

export default Sidebar