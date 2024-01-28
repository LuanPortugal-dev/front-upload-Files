import axios from "axios";

type CheckUser = {
    username: string;
    password: string;
}

type RegisterUser = {
    username: string;
    email: string;
    password: string;
    confirmPassword?: string;
}


export async function checkLogin(params:CheckUser) {

    const { username, password } = params;

    const URL = import.meta.env.VITE_API_URL

    const response = axios.post(`${URL}/users/login/`,
        {
            data: {
                username, password
            },
            headers: { 'Content-Type': 'application/json' }
        })

    return response
}

export async function registerUser(params:RegisterUser) {
    
    const { username, email, password } = params;

    const URL = import.meta.env.VITE_API_URL

    const response = axios.post(`${URL}/users/register/`,
    {
        data: {
            username, email, password
        },
        headers: { 'Content-Type': 'application/json' }
    })

return response
}

export async function uploadFiles(params:FormData) {
    
    const URL = import.meta.env.VITE_API_URL

    const response = axios.post(`${URL}/uploadfile/`,params, { responseType:'blob'})

return response
}


