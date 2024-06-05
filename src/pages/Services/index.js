import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Catalog = () => {
  const services = [
    {
      category: "Unhas em Gel",
      description: "As unhas em gel são uma técnica popular para alongamento e fortalecimento das unhas. O gel é aplicado sobre as unhas naturais e curado sob luz UV ou LED.",
      items: ["Aplicação de unhas em gel", "Manutenção de unhas em gel", "Remoção de unhas em gel", "Decorações e nail art em unhas em gel"]
    },
    {
      category: "Unhas Naturais",
      description: "Cuidados e tratamentos para manter as unhas naturais saudáveis e bonitas.",
      items: ["Manicure básica", "Polimento e hidratação das unhas", "Fortalecedor de unhas", "Nail art em unhas naturais"]
    },
    {
      category: "Cutilagem",
      description: "Processo de remoção das cutículas para deixar as unhas com aparência mais limpa e bem cuidada.",
      items: ["Cutilagem tradicional", "Cutilagem russa", "Hidratação de cutículas"]
    },
    {
      category: "Pés e Mãos",
      description: "Cuidados específicos para as mãos e pés, focando na saúde e estética.",
      items: ["Pedicure básica", "Spa dos pés", "Reflexologia podal", "Parafina para mãos e pés", "Massagem para mãos e pés"]
    },
    {
      category: "Sobrancelhas",
      description: "Serviços voltados para o design e manutenção das sobrancelhas.",
      items: ["Design de sobrancelhas", "Henna para sobrancelhas", "Micropigmentação", "Depilação com linha"]
    },
    {
      category: "Depilação",
      description: "Métodos variados para remoção dos pelos corporais, proporcionando uma pele lisa e macia.",
      items: ["Depilação com cera quente ou fria", "Depilação com linha", "Depilação a laser", "Depilação com creme depilatório"]
    },
    {
      category: "Skin Care",
      description: "Cuidados gerais com a pele, visando limpeza, hidratação e rejuvenescimento.",
      items: ["Limpeza de pele profunda", "Peeling químico", "Hidratação facial", "Máscaras faciais", "Tratamentos anti-idade"]
    }
  ];

  return (
    <div className="catalog-page">
      <header className="header">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/Services">Serviços</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <div className="catalog">
        {services.map((service, index) => (
          <div key={index} className="service">
            <h2>{service.category}</h2>
            <p>{service.description}</p>
            <ul>
              {service.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Manyxs</p>
        </div>
        <div className="social-links">
          <a href="https://www.facebook.com/?locale=pt_BR">Facebook</a>
          <a href="https://www.instagram.com/">Instagram</a>
          <a href="https://twitter.com/login?lang=pt">Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default Catalog;