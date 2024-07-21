import { useState } from 'react'
import './FormField.css'
import { useNavigate } from 'react-router-dom'


function FormField() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate()
    
    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
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
        <form onSubmit={handleSubmit}>
        <input placeholder="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Login</button>
    </form>
    )
}

export default FormField