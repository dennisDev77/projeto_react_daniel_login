import './styles.css';



export default function Login() {
  return (
    <div className='container'>
      <div className='login'>
        <div className='header'>
          <h1 className='title'>
            Login
          </h1>
          <p className='login-info'>
            Entre com seu email e senha para acessar sua conta
          </p>
        </div>
        <form>
          <label>
            Login: <input name="myInput" defaultValue="" />
          </label>
          <label>
            Senha: <input name="myInput" defaultValue="" type="password"/>
          </label>
          <button type="submit">Login</button>
          <div className="cadastro-link">
            <p>Não tem uma conta ? <span><a href='#' >Cadastre se</a></span></p>
          </div>
        </form>
      </div>
    </div>
  )
}
