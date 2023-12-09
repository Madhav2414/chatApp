import React, { useState } from 'react'
import Drawer from 'react-modern-drawer'
function UserProfile() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <button onClick={toggleDrawer}>Show</button>
            <Drawer
                overlayColor={"#1335bd"}
                open={isOpen}
                size={"500px"}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
            >
                <div>Hello World</div>
            </Drawer>
        </>
    )
}

export default UserProfile