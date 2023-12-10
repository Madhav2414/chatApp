import React from 'react'

function CustomFillBtn({btntext,variant}) {
    return (
        <>
            <div className='w-full  '>
                <button className={ `px-5 py-3 font-bold text-base rounded 
                w-full ${variant === "gradient" ?'bg-gradient-to-r  from-cyan-200 to-yellow-200  text-black' 
                : variant === 'border'?  'bg-slate-800  border border-slate-600 text-white ' : "bg-slate-700 text-white"} `}>
                    {btntext}
                </button>
            </div>
        </>

    )
}

export default CustomFillBtn