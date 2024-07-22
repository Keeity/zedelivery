import { Link } from "react-router-dom"
import FormSignin from "../components/FormSignin/FormSignin"
import './Pages.css'

function SigninPage() {

    return (
    <div className='signin'>
       <h1>Login</h1>
      <FormSignin> </FormSignin>
      <nav>
              <p>Você ainda não está cadastrado?</p>
              <Link  to= '/cadastro'>Cadastre-se</Link>
          </nav>
    </div>
    )
}

export default SigninPage
