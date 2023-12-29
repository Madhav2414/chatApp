import React, { useEffect, useState } from 'react'
import ActiveComponet from './ActiveChatComponent/ActiveComponet'
import Userchat from './ListUserDetail/Userchat'
import axios from 'axios';

function ChatHistory() {

    const fetUser = () => {
        axios.get('https://dummyjson.com/user')
            .then(function (response) {
                if (response) {
                    const userData = response.data.users;
                    setUser(userData);
                }
            })
    }
    useEffect(() => {
        fetUser();
        console.log(user);
    }, [])

    const [user, setUser] = useState([]);
    return (
        <>
            <div className=' border border-l-0  border-t-0 border-slate-700'>
                <ActiveComponet />
                <div className='max-h-screen bg-slate-900 h-[calc(100vh-90px)] overflow-scroll no-scrollbar' >
                    {
                        user.map((elm) => (
                            <div key={elm.id} className='cursor-pointer hover:bg-slate-700'>
                                <Userchat 
                                bgColour={elm.eyeColor}
                                userName={`${elm.firstName }  
                                ${elm.lastName}`} 
                                lastMsg={elm.email} 
                                img={elm.image}  
                                isBadgeShow = {elm.age >= 40 ? true : false}
                                
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ChatHistory