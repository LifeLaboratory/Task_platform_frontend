import fetch from "cross-fetch";

export async function login(credentials){
    const {login, password} = credentials

    return await fetch(`${process.env.REACT_APP_API_URL}/api/auth`)
}

