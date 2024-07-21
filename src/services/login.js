//exercicios 2 e 7
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login ()  {
//se precisa redirecionar um usuário, nao usa tagLink, 

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate();

    function handleSubmit(e) {
       if (email === 'admin@admin.com' && senha === 'admin123') {
            // redireciona para algum lugar
         navigate('/about');
             }

        alert('Email e/ou senha incorretos')
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <input type="password" />
                <button>Entrar</button>
            </form>
        </>
    )
}

export default Login