import React from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <>
            Login
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                <Link to="/about">
                    Go To About
                </Link>
            </button>
        </>
    )
}
