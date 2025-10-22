import { AnchorButton } from "../../components/AnchorButton";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import "./styles.css";
import { useState } from "react";

export default function Login() {

  //State que controla o form
  const [email, setEmail]=useState("")
  const [senha, setSenha]=useState("")
  
  console.log(email, senha)

  //Funcao que realiza o login sempre que for chamada
 async function enviarDados() {
  try {
    const response = await fetch("https://suaapi.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        senha,
      }),
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar os dados");
    }

    const data = await response.json();
    console.log("Resposta da API:", data);

    // Aqui podes tratar a resposta (ex: guardar token, redirecionar)
  } catch (error) {
    console.error("Erro:", error);
  }
}

  return (
    <div className="container">
      <div className="login">

        <div className="header">
          <h1 className="title">Login</h1>
          <p className="login-info">
            Entre com seu email e senha para acessar sua conta
          </p>
        </div>
        <form onSubmit={enviarDados}>
          <Input label="Login:" name="login" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <Input label="Senha" name="senha" type="password" value={senha} onChange={(e)=>setSenha(e.target.value)} />

          <Button label="Login" type="submit"/>
            <p>
              Não tem uma conta ? <AnchorButton name="Cadastre-se"/>
            </p>
            
        </form>
      </div>
    </div>
  );
}
