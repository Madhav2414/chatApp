import React from 'react'
import { BsPaperclip } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { BsFillSendFill } from "react-icons/bs";
function MessageInput() {
    return (
        <>
            <div className='flex justify-between items-center bg-slate-800  p-4 mb-3 rounded-lg'>
                <div className='flex-1'>
                    <input type="text" className='outline-none bg-transparent w-full text-white  text-lg' placeholder='Type your message or press / key for quick reply ' />
                </div>
                <div className='flex items-center gap-4 '>
                    <div className='font-medium text-neutral-400 cursor-pointer'>
                        <BsPaperclip className='text-xl' />
                    </div>
                    <div className='font-medium text-neutral-400 cursor-pointer'>
                        <BsEmojiSmile className='text-xl'/>
                    </div>
                    <button className='flex font-bold py-2 gap-4 rounded-xl items-center px-3 bg-gradient-to-r from-cyan-200 to-yellow-200  '>
                        <span>
                            Send
                        </span>
                        <BsFillSendFill />
                    </button>
                </div>
            </div>
        </>
    )
}

export default MessageInput