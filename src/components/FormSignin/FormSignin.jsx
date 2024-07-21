import './FormSignin.css'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
// import { useAuth } from '../context/AuthContext.jsx'
// import { apiLogin } from "../services/api.js"


function FormSignin() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate()
  
  // const { login } = useAuth()

  const handleSubmit = async (event) => {
      event.preventDefault()

      try {
          // const response = await apiLogin(username, password)
          // if (response.success) {
          //     login(response)
          if (email === 'admin@admin.com' && password === 'admin123') {
            // redireciona para algum lugar
                navigate('/home')
          } else {
              alert('Usuário ou senha incorretos')
          }

      } catch (error) {
          console.log(error)
      }
  }

  return (
      <div className= 'formSignin'>
          <form className='form' onSubmit={handleSubmit}>
              <input placeholder="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <button type="submit">Entre</button>
          </form>
        

      </div>
  )
}


export default FormSignin