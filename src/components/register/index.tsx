import React, { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { registerUser } from '../../backend/'

import imageUser from '../../assets/imgs/user.png'

export default function RegisterUser() {

    const navigate = useNavigate()

    const userName = useRef<HTMLInputElement | null>(null)
    const userPassword = useRef<HTMLInputElement | null>(null)
    const confirmPassword = useRef<HTMLInputElement | null>(null)
    const userEmail = useRef<HTMLInputElement | null>(null)

    const handleSubmitRegistration = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

    }

    return (
        <>
            <main className="w-full h-screen flex items-center justify-center bg-slate-400">
                <div className="w-2/4 mh-3/4 py-5 flex flex-col items-center justify-center gap-4 bg-slate-500">
                    
                    <img src={imageUser} className="w-20 hover:scale-110 duration-300" alt="Logo do Usuário" />
                    
                    <h1 className="font-medium">User Registration</h1>

                    <input className="w-3/4 rounded-lg p-1"
                        type="text"
                        placeholder="Full Name"
                        ref={userName}
                    />

                    <input className="w-3/4 rounded-lg p-1"
                        type="email"
                        placeholder="Your Email..."
                        ref={userEmail}
                    />

                    <input className="w-3/4 rounded-lg p-1"
                        type="password"
                        placeholder="Choose a password..."
                        ref={userPassword}
                    />

                    <input className="w-3/4 rounded-lg p-1"
                        type="password"
                        placeholder="Confirm the Password..."
                        ref={confirmPassword}
                    />

                    <button
                        type="submit"
                        className="w-3/4 p-1 rounded-md text-white bg-blue-700 hover:bg-blue-500 duration-200 cursor-pointer"
                        onClick={handleSubmitRegistration}
                    >Register
                    </button>

                    <p className="flex flex-col sm:flex-row justify-center items-center gap-1">
                        <Link to='/' className="font-medium text-white hover:text-sky-500 duration-200">Log in</Link>
                    </p>
                </div>
            </main>
        </>
    )
}