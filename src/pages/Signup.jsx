import { Link } from "react-router-dom"
import FormSignup from "../components/FormSignup/FormSignup"
import './Pages.css'

function SignupPage() {

    return (
        <div className= 'signup'>
        <h1>Cadastro</h1>
        <FormSignup></FormSignup>
        <nav>
                <p>Você já tem cadastro?</p>
                <Link  to= '/login'>Login</Link>
            </nav>
        </div>
    )
}

export default SignupPage