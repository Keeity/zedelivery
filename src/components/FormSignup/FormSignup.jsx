import './FormSignup.css'

function FormSignup() {

    return (

    <>
        <div className= 'formSignup'>
            <form className="form">

              <label >
                <b className="label"> Nome</b>
                <input
                  className="form-control"
                  placeholder="Digite o seu Nome"
                  type="text"
                ></input>

              </label>
              <label className="label-control col-sm-6 col-md-6 col-lg-6 mt-6 p-3">
                <b className="label">Email</b>
                <input
                  className="form-control"
                  placeholder="Digite o seu email"
                  type="email"
                ></input>
              </label>
            
              <label className="label-control col-sm-6 col-md-6 col-lg-6 mt-6 p-3">
                <b className="label">Senha</b>
                <input
                  className="form-control"
                  placeholder="Digite a sua senha"
                  type="password"
                ></input>
              </label>
                
              <label className="label-control col-sm-6 col-md-6 col-lg-6 mt-6 p-3">
                <b className="label">Endereço</b>
                <input
                  className="form-control"
                  placeholder="Informe seu endereço completo"
                  type="text"
                ></input>
              </label>

              <button type="submit">Cadastrar</button>
              </form>

            
              </div>
          

</>
)
}

export default FormSignup