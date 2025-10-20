import { AnchorButton } from "../../components/AnchorButton";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import "./styles.css";

export default function Login() {
  return (
    <div className="container">
      <div className="login">
        <div className="header">
          <h1 className="title">Login</h1>
          <p className="login-info">
            Entre com seu email e senha para acessar sua conta
          </p>
        </div>
        <form>
          <Input label="Login:" name="login" type="email" value={"aaaaa"} />
          <Input label="Senha" name="senha" type="password" value={"1234"} />

          <Button label="Login" type="submit"/>
            <p>
              Não tem uma conta ? <AnchorButton name="Cadastre-se"/>
            </p>
            
        </form>
      </div>
    </div>
  );
}
