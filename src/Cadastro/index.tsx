import './styles.css';

export default function Cadastro() {
  return (
    <div className='container'>
      <div className='login'>
        <div className='header'>
          <h1 className='title'>
            Cadastro
          </h1>
          <p className='login-info'>
           
          </p>
        </div>
        <form>
          <label>
           E-mail: <input name="myInput" defaultValue="" />
          </label>
          <label>
           Confirmar Email: <input name="myInput" defaultValue="" />
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
