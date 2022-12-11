import Login from "./components/Login"
import { login } from "./api"

const App = () => {

    const handleLogin = () => {
        login()
    }

    return (
        <div>
            <Login onSubmit={handleLogin}/>
        </div>
    )
}

export default App