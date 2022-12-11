const Login = ( { onSubmit } ) => {

        const handleFormSubmit = ( event ) => {
            event.preventDefault()
            onSubmit()
        }
    

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login