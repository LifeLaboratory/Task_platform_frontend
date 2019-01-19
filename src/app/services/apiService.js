import fetch from "cross-fetch";

export async function login(credentials){
    const {login, password} = credentials

    return await fetch(`${process.env.REACT_APP_API_URL}/auth`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json' 
        },
        body: JSON.stringify({login:login, password: password})
    }).then(function(result){ return result.json() })
}

export async function getEvents(credentials){
    const {token} = credentials
    return await fetch(`${process.env.REACT_APP_API_URL}/api/getEvents`).then(response => response.json()).then()
}

export async function registration(credentials){
        const {login, password, name, email} = credentials

    return await fetch(`${process.env.REACT_APP_API_URL}/registration`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({login: login, name: name, password: password, email: email})
    })
    
}
