import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";


function Userchat({img,userName,lastMsg}) {
    return (
        <>
        
            <div className=" flex justify-between p-4  items-center border border-x-0 border-t-0 border-slate-700 text-white "  >
                <div className=" items-center flex">
                    <div className="">
                        <img className=" h-16 w-16 rounded-full object-center object-cover " src={img} alt="" />
                    </div>
                    <div className="pl-6">
                        <h5 className=" font-bold ">
                            {userName}
                        </h5>
                        <div>
                            <span className="text-neutral-400 font-medium">{lastMsg}</span>
                        </div>
                    </div>

                </div>
                <div className=" items-center flex">
                    <span className=" font-medium text-neutral-400">10:15</span>
                    <BsThreeDotsVertical className=" cursor-pointer text-neutral-400 font-medium " />
                </div>

            </div>
        </>
    )
}
export default Userchat
