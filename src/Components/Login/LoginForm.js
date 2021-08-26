import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import Error from '../Helper/Error';
import { userContext } from '../../UserContext';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';
import Head from '../Helper/Head';

const LoginForm = () => {
  const username = useForm(); // nao se coloca nada para aceitar tanto email como usuario normal
  // const username = useForm('email');  // useForm é um objeto com value, setValue e onChange, entao da pra desestruturar o username pra ter acesso aos itens desse objeto no input. O email é o type do useForm

  //console.log(username.value); // esse value vai ser usado para fazer o fetch mais embaixo

  const password = useForm();

  const { userLogin, error, loading } = React.useContext(userContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />

      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        {/* essa desestruturação faz a gente ter acesso ao value, setValue e onChange o useForm no Input,js */}
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && 'Usuário ou senha inválidos'} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui uma conta? Cadastre-se aqui.</p>
      </div>
      <Link className={stylesBtn.button} to="/Login/criar">
        Cadastro
      </Link>
    </section>
  );
};

export default LoginForm;
