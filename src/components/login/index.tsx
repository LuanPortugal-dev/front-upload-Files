import React, { useRef } from 'react';
import imageUser from '../../assets/imgs/user.png'

import {CheckLogin} from '../../backend/'

export default function App() {

    const userEmail = useRef<HTMLInputElement | null>(null)
    const userPassword = useRef<HTMLInputElement | null>(null)
  
    let extendTokenValidity = false;
  
    const verifyCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
      extendTokenValidity = e.target.checked;
    };
  
    const handleSubmitLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const verifyLogin = await CheckLogin(userEmail.current?.value!, userPassword.current?.value!)
    };

    return (
        <>
            <main className="w-full h-screen flex items-center justify-center bg-slate-400">
                <div className="w-2/4 mh-3/4 py-5 flex flex-col items-center justify-center gap-4 bg-slate-500">

                    <img src={imageUser} className="w-20 hover:scale-110 duration-300" alt="Logo do Usuário" />

                    <h1 className="font-medium">User Login</h1>

                    <input className="w-3/4 rounded-lg p-1"
                        type="email"
                        placeholder="Seu email..."
                        ref={userEmail}
                    />

                    <input className="w-3/4 rounded-lg p-1"
                        type="password"
                        placeholder="***************"
                        ref={userPassword}
                    />

                    <div className="w-3/4 flex flex-col sm:flex-row items-center justify-between">
                        <div className="flex items-center gap-2">
                            <input onChange={verifyCheckBox} type="checkbox" />
                            <label>Lembrar senha</label>
                        </div>

                        <a href="#">Esqueceu a senha</a>
                    </div>

                    <button
                        type="submit"
                        className="w-3/4 p-1 rounded-md text-white bg-blue-700 hover:bg-blue-500 duration-200 cursor-pointer"
                        onClick={handleSubmitLogin}
                    >Acessar
                    </button>

                    <p className="flex flex-col sm:flex-row justify-center items-center gap-1">
                        Não Possui uma conta?
                        <a href="#" className="font-medium text-white hover:text-sky-500 duration-200">Entre em contato</a>
                    </p>
                </div>
            </main>
        </>
    )
}