import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Login from './Login';
import Cadastro from './Cadastro';
import "./global.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Cadastro/>
    <Login />

  </StrictMode>,
)
