import React from 'react'
import Sidebar from '../../components/SideBar/Sidebar'
import Navbar from '../../components/NavBar/Navbar'
import ChatBox from '../../components/ChatBox/ChatBox'
import ChatHistory from '../../components/ChatHistory'

function HomePage() {
  return (
    <>
      <div className='h-screen overflow-hidden'>
        <div>
          <Navbar />
        </div>
        
        <div className='flex ml-16'>
          <div className='w-2/5'>
            <ChatHistory />
          </div>
          <div className='w-full'>
            <ChatBox />
          </div>
        </div>
        <div className='fixed left-0 top-0'>
          <Sidebar />
        </div>



      </div>

    </>
  )
}

export default HomePage