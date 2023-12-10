import React, { useState } from 'react'
import Drawer from 'react-modern-drawer'
import CustomFillBtn from '../CustomFillBtn/CustomFillBtn'
import CustomInput from '../CustomInput/CustomInput'

function UserProfile() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <button onClick={toggleDrawer}>Show</button>

            <Drawer
                open={isOpen}
                size={"500px"}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
                style={{cursor:"auto"}}
            >
                <div className='h-screen p-5  w-full bg-gray-900 profile_container'>
                    <div className='flex  justify-center'>
                        <img className='w-40  h-40 mb-5  object-cover  hover:text-white cursor-pointer rounded-full' src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png' alt=''></img>
                    </div>
                    <form>
                    <div className='my-2' >
                        <CustomInput PlaceHolder={"First Name"} />
                    </div>
                    <div className='my-4' >
                        <CustomInput PlaceHolder={"Last Name"} />
                    </div>
                    <div className='flex justify-between left-0 px-5 w-full absolute bottom-5 gap-3 '>
                        <CustomFillBtn btntext={'Cancel'} variant={'border'} />
                        <CustomFillBtn btntext={'Save profile'} variant={"gradient"} />


                    </div>

                    </form>
                
                </div>

            </Drawer>
        </>
    )
}

export default UserProfile