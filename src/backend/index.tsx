import axios from "axios";


export async function CheckLogin(username: string, password: string) {

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



