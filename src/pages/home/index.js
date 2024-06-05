import './index.scss';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pagina-home">
      <header className="header">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/Services">Serviços</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <div className="banner">
          <div className="banner-name">MANYX</div>
          <img
            src="https://s1.1zoom.me/b5050/292/Fields_Sunrises_and_sunsets_Cosmos_plant_527629_1920x1080.jpg"
            alt="Banner"
            className="banner-image"
          />
        </div>


      <section id="hero" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="title">Unhas Sempre Perfeitas</h1>
            <p className="subtitle">
              Desperte a beleza nas suas mãos. Agende agora sua sessão de manicure e descubra a arte de cuidar das suas unhas. Deixe-nos transformar seus dedos em obras-primas, embelezando sua vida uma unha de cada vez.
            </p>
            <h2 className="cta">Ligue para o Agendamento</h2>
          </div>
          <img
            src="https://media.glamourmagazine.co.uk/photos/651bd9c13de0545635014102/16:9/w_1920,h_1080,c_limit/%20RUSSIAN%20MANI%20031023%20%20FE00F4FF-261F-4EDA-879A-644C8EF469D4_L.jpg"
            alt="Manicure"
            className="hero-image"
          />
        </div>
      </section>

      <section id="info" className="info-section">
        <div className="info-content">
          <img
            src="https://www.refinery29.com/images/11498581.jpg?crop=2000%2C1049%2Cx0%2Cy307"
            alt="Marcação de sessão"
            className="info-image"
          />
          <div className="info-text">
            <h1>Marque sua sessão e brilhe com estilo incomparável!</h1>
            <p>
              De segunda a sexta, sua beleza em mãos há de brilhar. Agende agora e deixe seu estilo se destacar. Com cuidado e primor, nossa equipe irá cuidar de cada detalhe para deslumbrar sua beleza.
            </p>
            <h2 className="cta">Agende agora</h2>
          </div>
        </div>
      </section>

      <section id="location" className="location-section">
        <div className="location-content">
          <div className="location-text">
            <h1>Localizado na Avenida Paulista</h1>
            <p>
              Venha descobrir a elegância na Avenida Paulista! Nossa loja de manicure está pronta para transformar suas mãos em obras de arte. Agende sua sessão hoje mesmo e deixe nossos especialistas cuidarem de você com todo o carinho e atenção que merece.
            </p>
            <h2 className="cta3">Encontre-nos!</h2>
            <h2 className='cta2'>11 93234245234</h2>
          </div>
          <img
            src="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/07/avenida-paulista-sao-paulo-capa2019-01.jpg"
            alt="Localização"
            className="location-image"
          />
        </div>
      </section>

      <section id="colors" className="colors-section">
        <h1>Aqui nós temos de tudo para você e suas unhas!</h1>
        <div className="color-options">
          <div className="color-item">
            <img
              src="https://magote-images.s3-sa-east-1.amazonaws.com/20180530-01-manicure_pedicure_ganesha.jpg"
              alt="Pintura das Unhas"
              className="color-image"
            />
            <p>Pintura das Unhas</p>
          </div>
          <div className="color-item">
            <img
              src="https://summerelisabethdayspa.b-cdn.net/wp-content/uploads/2020/01/nails_pic.jpg"
              alt="Unhas Postiças"
              className="color-image"
            />
            <p>Unhas Postiças</p>
          </div>
          <div className="color-item">
            <img
              src="https://www.byrdie.com/thmb/LHx7BVsoebv4oaUDLgQhmFTdQLs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/344500549_1204630323554727_104550340570084733_n-4d4d35668bca42cd9897abb6c1cf6bb0.jpg"
              alt="Cuidar das Cutículas"
              className="color-image"
            />
            <p>Cuidar das Cutículas</p>
          </div>
        </div>
        <div className="video-container">
          <video controls>
          <source src="/assets/videos/unhas_adv.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h1>Fale Conosco</h1>
        <p>
          Entre em contato com a gente de segunda a sexta, das 9h às 18h. Basta escrever sua mensagem na caixa ao lado e colocar o email de sua preferência para enviar.
        </p>
        <form className="contact-form">
          <textarea placeholder="Escreva sua mensagem aqui"></textarea>
          <input type="email" placeholder="Digite seu email aqui" />
          <button type="submit">Enviar</button>
        </form>
      </section>

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
}
