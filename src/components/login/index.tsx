import React, { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import imageUser from '../../assets/imgs/user.png'

import { checkLogin } from '../../backend/'

export default function App() {

    const navigate = useNavigate()

    const userEmail = useRef<HTMLInputElement | null>(null)
    const userPassword = useRef<HTMLInputElement | null>(null)

    let extendTokenValidity = false;

    const verifyCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
        extendTokenValidity = e.target.checked;
    };

    const handleSubmitLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const params = {
            username: userEmail.current?.value!,
            password: userPassword.current?.value!
        }

        try {
            const verifyLogin = await checkLogin(params)

            const token = verifyLogin?.data.token
      
            if (token) {
              localStorage.setItem('token', token)
              navigate('/upload')
            }
      
          } catch (error: any) {
 
            if (error.response.status !== 200 && error.response.status !== 401) {
              alert('Error de servidor')
            }
      
            if (error.response.status === 401) {
              alert('Login ou senha incorretos!')
            }
          }
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
                        <Link to='/register' className="font-medium text-white hover:text-sky-500 duration-200">Não Possui uma conta?</Link>
                    </p>
                </div>
            </main>
        </>
    )
}