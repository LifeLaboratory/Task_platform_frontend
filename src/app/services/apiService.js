import fetch from "cross-fetch";

export async function login(credentials) {
  const {login, password} = credentials

  return await fetch(`${process.env.REACT_APP_API_URL}/auth`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({login: login, password: password})
  }).then(function (result) {
    return result.json()
  })
}

export async function getEvents() {
  const mockEvents = [{
    date: "24.01.2019 - 24.01.2019",
    name: "Традиционная игра на открытом воздухе",
    players: "3/10",
    description: `CTF (Capture the flag) — это командная игра, главной целью которой является захват «флага» у соперника. 
      Формат Сapture the flag может использоваться и в пейнтболе, и среди ролевиков, и в компьютерных играх. 
      В области компьютерной безопасности тоже есть своё понятие CTF. 
      Командные соревнования по информационной безопасности формата CTF — это как раз то,
       что стало причиной появления тысяч команд со всего мира и то, ради чего создана эта лента.`,
    organizer: {
      name: "Gazprom"
    },
    sponsors: [
      {
        name: "Megafon"
      }
    ]
  }]
  //return await fetch(`${process.env.REACT_APP_API_URL}/api/getEvents`).then(response => response.json()).then()
  return await Promise.resolve(mockEvents)
}

export async function registration(credentials) {
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
