import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <form>
        <input type="text" placeholder="Nome Completo" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Ir para o login</Link>
      </form>
    </>
  );
}
