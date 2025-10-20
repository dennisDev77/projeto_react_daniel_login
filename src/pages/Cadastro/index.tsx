import "./styles.css";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { AnchorButton } from "../../components/AnchorButton";

export default function Cadastro() {
  return (
    <div className="container">
      <div className="login">
        <div className="header">
          <h1 className="title">Cadastro</h1>
          <p className="login-info">
            Entre com as informação para continuar o cadastro
          </p>
        </div>
        <form>
          <Input label="Nome Completo" name="name" type="text" />
          <Input label="E-mail" name="email" type="email" />
          <Input label="Confimar E-mail" name="confimarEmail" type="email" />
          <Input label="Senha" type="password" />
          <Input label="Confirmar Senha" type="password" />
          <Button label="Confirmar cadastro" />

            <p>
              Já tem uma conta ? <AnchorButton name="Login" />
            </p>
            

        </form>
      </div>
    </div>
  );
}
