import axios from "axios"

const login = async () => {
    const response = await axios.get("http://localhost:1337/todos",  { mode: 'cors' })

    console.log(...response.data)
}

export { login }