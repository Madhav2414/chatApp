import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsFillBookmarkStarFill } from "react-icons/bs";

function Userchat({ bgColour, img, userName, lastMsg , isBadgeShow}) {
    return (
        <>

            <div className=" flex relative justify-between p-4  items-center border border-x-0 border-t-0 border-slate-700 text-white "  >
             {
                isBadgeShow ? 
                <div className="text-cyan-300 ribbon absolute top-0 right-5 text-xl ">
                    <BsFillBookmarkStarFill />
                </div>
                :null
             }
                
                <div className=" items-center flex">
                    <div style={{backgroundColor:bgColour}}  className="h-16 w-16 overflow-hidden border border-slate-700 rounded-full">
                        <img className=" h-full w-full  object-center object-cover " src={img} alt="" />
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
