import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { useMutation } from "@apollo/client";
import { SIGN_IN } from "./../../../../graphql/queries";
import { Singn } from "./../../../../types/sign-in";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loginClient, { data, loading, error }] = useMutation<Singn>(SIGN_IN);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  const clearDatas = () => {
    setEmail("");
    setSenha("");
  };

  useEffect(() => {
    if (data) navigate("/dashboard");
  }, [data]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    loginClient({ variables: { input: { email, senha } } });
    clearDatas();
  };

  return (
    <form onSubmit={handleSubmit} className='container__login'>
      <h2 className='container__login__title'>
        Olá, entre com e-mail e senha.
      </h2>
      <div className='container__email'>
        <label className='container__email__label' htmlFor='email'>
          Seu e-mail
        </label>
        <input
          className='container__email__input'
          type='email'
          name='email'
          id='email'
          placeholder='exemplo@email.com'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className='container__senha'>
        <label className='container__senha__label' htmlFor='senha'>
          Senha
        </label>
        <input
          className='container__senha__input'
          type='password'
          name='senha'
          id='senha'
          placeholder='Digite sua senha'
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />
      </div>
      <div className='container__checkbox'>
        <input
          className='container__check__input'
          type='checkbox'
          name='check'
          id='check'
        />
        <label className='container__check__label' htmlFor='check'>
          Manter conectado
        </label>
      </div>
      <div className='container__button'>
        <button className='container__button__send'>Entrar</button>
      </div>
      <p className='container__login__footer'>Não possui conta? Cadastre-se!</p>
    </form>
  );
};

export default Login;
