import React from 'react'

function Chat({varient}) {
    return (
        <>
            <div className={` my-4 flex ${varient === 'sender'? "flex-row-reverse" :"" }`}>
                <img className='w-10 h-10 object-cover cursor-pointer rounded-full' src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png' alt=''></img>
                <div>
                    <div className={`flex  items-center ${varient === 'sender'? "flex-row-reverse" : ""}`}>
                        <h1 className= 'mx-3 text-white'>
                            Maria P. Henderson
                        </h1>
                        <div className='mx- text-xs text-white'>
                            10:00 AM
                        </div>
                    </div>
                    <div className='px-3 py-1'>
                        <div style={{overflowWrap: 'anywhere'}} className= {  ` max-w-md mt-3 p-3 px-6   ${varient === 'sender'? ' bg-cyan-200 rounded-b-lg text-black rounded-tl-lg ' : 'rounded-b-lg rounded-tr-lg text-white bg-slate-700'} `}>
                            <span >
                                Hey guys, How was your losts sdfcjkosvdjps zdjvpsdivjoijopss divjopshvohhhhhh  
                            </span>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Chat