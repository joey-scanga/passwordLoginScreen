import LoginForm from "./LoginForm"
import Button from "./Button"
import Footer from "./Footer"
const Loginbox = () => {
    return (
        <div className='loginbox-container'>
            <h1>Login</h1>
            <LoginForm />
            <Button text="Create Account" />
            <Footer />
        </div>
    )
}

export default Loginbox
