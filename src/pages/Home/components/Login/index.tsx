import "./styles.css";

const Login = () => {
  return (
    <div className='container__login'>
      <h2 className='container__login__title'>
        Olá, entre com e-mail e senha.
      </h2>
      <div className='container__email'>
        <label className='container__email__label' htmlFor='email'>
          Seu e-mail
        </label>
        <input
          className='container__email__input'
          type='password'
          name='email'
          id='email'
          placeholder='exemplo@email.com'
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
    </div>
  );
};

export default Login;
