import './login.scss';
import { Link } from 'react-router-dom';

export default function Login() {
  const handleLogin = (event) => {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Obter os valores dos campos de email e senha
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Verificar se o email e a senha correspondem aos valores esperados
    if (email === 'teste@gmail.com' && password === '1234') {
      // Se sim, redirecionar para a rota /app
      window.location.href = '/Dash';
    } else {
      // Se não corresponderem, exibir uma mensagem de erro (opcional)
      alert('Email ou senha incorretos. Tente novamente.');
    }
  };

  return (
    <div className='login-page'>
      <div className='login-container'>
        <h2 style={{ fontFamily: 'Arial, sans-serif' }}>Iniciar Sessão</h2>
        <form id='login-form' onSubmit={handleLogin}>
          <input type='email' id='email' name='email' placeholder='Endereço de E-mail' required/><br/>
          <input type='password' id='password' name='password' placeholder='Senha' required/><br/>
          <div className='remember-me'>
            <input type='checkbox' id='remember' name='remember'/>
            <label htmlFor='remember'>Lembrar-me</label><br/>
            <Link to='/senha' className='forgot-password'>Esqueci minha senha</Link>
          </div>
          <input type='submit' value='Entrar'/>
        </form>
        <a href='/' style={{ color: '#2E8B57' }}>Voltar ao site principal</a>
      </div>
    </div>
  );
}
