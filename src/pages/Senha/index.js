import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.scss';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showHomeButton, setShowHomeButton] = useState(false);

  const handleSendEmail = () => {
    if (email.trim() !== '') {
      setMessage('Enviamos um código de recuperação para o seu E-mail!');
      setShowHomeButton(true);
    } else {
      setMessage('Por favor, informe um E-mail válido.');
    }
  };

  return (
    <div className="forgot-password-container">
      <p className="instruction">Por favor, informe seu e-mail para enviarmos o código de recuperação:</p>
      <input
        type="email"
        placeholder="Informe o E-mail de recuperação"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="email-input"
      />
      <button onClick={handleSendEmail} className="send-button">
        Enviar
      </button>
      {message && <p className="message">{message}</p>}
      {showHomeButton && (
        <Link to="/" className="home-button">
          Página Inicial
        </Link>
      )}
    </div>
  );
};

export default ForgotPassword;
