import React from 'react'
import CustomFillBtn from '../../../components/CustomFillBtn/CustomFillBtn'
import AppImage from '../../../assets/app-img.png'
import bell from '../../../assets/bell.png'
import message from '../../../assets/message.png'
import AboutBtn from './AboutBtn/AboutBtn'


function LandingPage() {
    return (
        <>
            <div className='bg-slate-900 p-5 '>
                <nav className=" flex justify-between">
                    <div className='text-white flex items-center'>
                        <h1>GUFT GU</h1>
                    </div>
                    <div className="flex items-center  ">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex items-center">
                                        <a href="#" className="text-gray-400 hover: hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</a>
                                        <a href="#" className="text-gray-400 hover: hover:text-white rounded-md px-3 py-2 text-sm font-medium"><AboutBtn/></a>
                                        <a href="#" className="text-gray-400 hover: hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                            <CustomFillBtn btntext={"Log In with Google"} variant={"border"} className="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <section className='mt-20' >
                    <div className='items-center flex flex-col justify-center'>
                        <div className='text-center '>
                            <h1 className='hero_text_gradient font-extrabold md:text-8xl sm:text-xs  '>
                                Team chat <br /> Reimagined
                            </h1>
                        </div>
                        <div className='text-center w-3/12 my-10'>
                            <span className='text-white  '>
                                Chat is more than just words. With GUFT GU,
                                express yourself using emojis, GIFs, and more.

                                Connect with friends and loved ones
                                effortlessly in a chat experience designed just for you.
                            </span>
                        </div>

                        <div className='w-52 '>
                            <CustomFillBtn btntext={"Start Chat"} variant={"gradient"} className="" />
                        </div>
                    </div>

                </section>
                <section className='my-4'>

                    <div className='flex items-center flex-col justify-center'>
                        <div className='flex justify-between w-9/12 my-12'>
                        <img className='w-16 -rotate-45' src={bell} alt="" />
                        <img className='w-16 rotate-12' src={message} alt="" />
                        </div>
                        <div className='image_container w-4/5 relative   '>
                            <img className='border  border-slate-700 border-b-0' src={AppImage} alt="" />
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}

export default LandingPage