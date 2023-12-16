import React, { useState } from 'react'
import Drawer from 'react-modern-drawer'
import Hello from '../../../../assets/Hello.png'
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss, SiRedux } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

function AboutBtn() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleAbout = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <>
            <button onClick={toggleAbout}>About</button>
            <Drawer
                open={isOpen}
                size={"400px"}
                onClose={toggleAbout}
                direction='top'
                className='bla bla bla'
                style={{ cursor: "auto" }}
            >

                <div className='bg-slate-900 h-full p-10 w-full flex '>

                    <div >

                        <div className='flex items-end my-5'>
                            <h1 className='text-4xl'>
                                Hello
                            </h1>
                            <div className=''>
                                <img className='h-12' src={Hello} alt="" />
                            </div>
                        </div>
                        <div>
                            <p className='text-lg'>
                                GUFT GU, A collaborative project by three frontend enthusiasts
                                exploring React, Redux, and Tailwind CSS. Join us on this
                                learning journey as we craft a dynamic chat application. Our
                                mission is to combine modern technologies and user-centric
                                design for an engaging experience.
                            </p>
                            <div className='my-5 flex gap-4 text-xl'>
                                <span>
                                    Created with
                                </span>
                                <div className='flex items-center gap-4 '>
                                    <FaReact  />
                                    <SiTailwindcss />
                                    <SiRedux />
                                    <FaCss3Alt />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div>
                        <h1 onClick={toggleAbout} className='text-xl cursor-pointer'>
                            Close
                        </h1>
                    </div>
                </div>


            </Drawer>
        </>
    )
}

export default AboutBtn