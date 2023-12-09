import React from 'react'
import ChatSearch from '../UserChatHeader/ChatSearch'
import Chat from '../UserChat/SenderChat'
import MessageInput from '../MessageBar/messageInput'

function ChatBox() {
    return (
        <>
            <div className='bg-slate-900 h-[calc(100vh-90px)] relative'>
                <div className='px-1 '>
                    <ChatSearch />
                </div>
                <div className='p-5 pt-10 pb-64 h-screen overflow-scroll no-scrollbar '>
                    <Chat varient={'sender'} />
                    <Chat varient={''} />
                    <Chat varient={'sender'} />
                    <Chat varient={''} />
                    <Chat varient={'sender'} />
                    <Chat varient={''} />
                    <Chat varient={'sender'} />
                    <Chat varient={''} />
                    <Chat varient={'sender'} />
                    <Chat varient={''} />
                    <Chat varient={'sender'} />
                    <Chat varient={''} />
                </div>
                <div className='absolute bottom-0 w-full px-5'>
                    <MessageInput />
                </div>
            </div>

        </>
    )
}

export default ChatBox