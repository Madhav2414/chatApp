import React from 'react'

function CustomInput({PlaceHolder}) {
    return (
        <>

            <div className=''>
            <input className=' focus:border-cyan-300 w-full py-2 px-3 text-white border-neutral-500   font-medium text-lg outline-none bg-slate-800 items-center  border rounded-md' placeholder={PlaceHolder}/>
            </div>
          
        </>

    )
}

export default CustomInput