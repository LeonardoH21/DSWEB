import React from 'react';
import './box.scss'; // Importe o seu arquivo SCSS aqui
import { Link } from 'react-router-dom';



export default function Boxes() {
 
  return (
    <header className='pagina-home'>
      {/* Navbar */}
      <div className="noselect" id="navbar">
        <a href="http://localhost:3000/" id="logo">&nbsp;VeeGan&nbsp;</a>
        <div id="navbar-right">
          <Link to="/login" id="textmenu3">Login</Link>
        </div>
      </div>

      {/* Banner */}
      <div className="banner4 noselect container">
        <h4>VeeGan Boxes</h4>
        <h1 className="sentence">Sushis
          <div className="slidingVertical">
            <span>Gostosos,</span>
            <span>美味しい,</span>
            <span>Frescos.</span>
          </div>
        </h1>
      </div>

      {/* Segundo Menu */}
      <div className="topnav noselect">
        <ul className="nav main">         
          <li><a href="#conteudo">Boxes</a></li>
          <li><a href="#local">Localização</a></li>
          <li><a href="/boxes">VeeganBox</a></li>
        </ul>
      </div>

      {/* Conteúdo 1 */}
      <div className="conteudo">
        <div id="texto">
          <h1>Conheça Nossas Veeganboxes!</h1>
          <p>Descubra a experiência única das Veeganboxes na vibrante Liberdade! Nossas caixas exclusivas de sushis veganos são uma verdadeira festa para os sentidos, projetadas para grupos numerosos e ideais para celebrações com amigos. Cada Veeganbox é como uma barca repleta de sabores surpreendentes, garantindo uma explosão de delícias a cada bocado.</p>
          <p>
      Estamos abertos das 12:00 às 17:00 de segunda a sexta-feira, perto das barracas de comida próximas à Catedral da Liberdade. Não pode nos visitar? Sem problemas! Ligue para <strong>11 99602 9782</strong> e faça sua encomenda personalizada.</p>

.
      
        </div>
      </div>

    
      {/* Banner 2 */}
      <div className="banner2 noselect container">
        <a className="Ancorabaixa" id="forum" />
        <h4>Boxes de Sushis Vegganos</h4>
        <button className="card pointer">
          <h2>Confira Abaixo</h2>
        </button>
      </div>

      
  
      <div className="conteudo container">
  <a className="Ancora" id="conteudo" />
  <div className='some-page-wrapper'>
    <div className='row'>
      <div className='column'>
        <div className='green-column'>
          <img className="Imagem2" src="https://i.redd.it/cyqtve8l53r21.jpg" />
        </div>
      </div>
      <div className='column'>
        <div className='blue-column'>
          <h1>Box Dragão Verde</h1>
          <p>O Combo Dragão Verde é uma delícia gourmet para até duas pessoas, com 22 peças de sushi vegano. Inclui Nigiri de brócolis com teriyaki, Nigiri de berinjela empanada, Hot Roll vegano, Uramaki de abacate com alho-poró, Joe de cenoura e repolho roxo marinado, e Joe de pepino e shimeji.</p>
          <button className="botao1 pointer">
          <a><h2>Apenas R$60! Ligue agora  : 11-99602-9782</h2></a>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<hr></hr>

<div className="conteudo container">
  <div className='some-page-wrapper'>
    <div className='row'>
      <div className='column'>
        <div className='blue-column'>
          <h1> Box Leão Dourado</h1>
          <p>O Leão Dourado oferece uma seleção sofisticada e saudável, combinando arroz, alga nori, pepino e abacate. Além disso, inclui tofu, tempeh, shiitake e edamame, criando uma opção deliciosa e consciente para os amantes da culinária vegana.</p>
          <button className="botao1 pointer">
          <a><h2>Apenas R$50! Ligue agora  : 11-99602-9782</h2></a>
          </button>
        </div>
      </div>
      <div className='column'>
        <div className='green-column'>
          <img className="Imagem1" src="https://i.redd.it/uf19bcyhl1y01.jpg" />
        </div>
      </div>
    </div>
  </div>
</div>

<hr></hr>
<div className="conteudo container">
  <div className='some-page-wrapper'>
    <div className='row'>
      <div className='column'>
        <div className='green-column'>
          <img className="Imagem2" src="https://naira.menu/uploads/item/image/1364/vegan-sushi-combo-1994.jpeg" />
        </div>
      </div>
      <div className='column'>
        <div className='blue-column'>
          <h1>Box Fênix Vermelha</h1>
          <p>A Fênix Vermelha é uma combinação vibrante de sabores com arroz vermelho e recheios frescos, como abacate, alface, cenoura, pepino, tofu e pimentão amarelo. Essa mistura única oferece uma experiência culinária inspirada nas tradições asiáticas, com diversas opções de sabores.</p>
          <button className="botao1 pointer">
          <a><h2>Apenas R$80! Ligue agora  : 11-99602-9782</h2></a>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<hr></hr>

<div className="conteudo container">
  <div className='some-page-wrapper'>
    <div className='row'>
      <div className='column'>
        <div className='blue-column'>
          <h1> Box Primavera</h1>
          <p>O Combo Rolinho Primavera Vegano é uma deliciosa seleção de rolinhos recheados com ingredientes frescos e saudáveis, como repolho, cenoura, cogumelos, broto de feijão, e temperos aromáticos. Estes rolinhos crocantes são perfeitos para uma refeição leve e nutritiva, trazendo um toque autêntico da culinária asiática.</p>
          <button className="botao1 pointer">
          <a><h2>Apenas R$40! Ligue agora  : 11-99602-9782</h2></a>
          </button>
        </div>
      </div>
      <div className='column'>
        <div className='green-column'>
          <img className="Imagem1" src="https://th.bing.com/th/id/R.13b4182e5f3fde00084beafbdf45b3b3?rik=9FM%2fqerhTG9hNg&riu=http%3a%2f%2fculinaria.culturamix.com%2fblog%2fwp-content%2fgallery%2freceitas-de-rolinho-primavera-2%2fReceitas-de-Rolinho-Primavera-2.jpg&ehk=yPtp0Lo7FPB0rsFvjpBT7jlMLNsx5ATBpLkq8pvakDA%3d&risl=&pid=ImgRaw&r=0" />
        </div>
      </div>
    </div>
  </div>
</div>

<hr></hr>

.
      
        
      {/* Localização */}
      <div className="conteudo container">
        <a className="Ancora" id="conteudo" />
        <div className='some-page-wrapper'>
          <div className='row'>
            <div className='column'>
              <div className='green-column'>
                <iframe
                  title="Localização do VeeGan"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d323.26836870953247!2d-46.635331655402304!3d-23.555363666430292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a999be661f%3A0xa1b6b41ad0551c52!2sFeira%20da%20Liberdade!5e0!3m2!1sen!2sbr!4v1715975135632!5m2!1sen!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: '0' }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className='column'>
              <div className='blue-column'>
                <h1>Localização</h1>
                <p>"Estamos localizados na Liberdade, sempre em frente à Catedral, à direita do metrô na saída da Liberdade"</p>
                <button className="botao1 pointer">
                  <a href="#"><h2>Aberto de segunda/sexta</h2></a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      .

      {/* Rodapé */}
      <footer className="footer">
        <a className="Ancora" id="local" />
        <div className="grid-container">
          <div className="grid-item">
            <ul>
              <h6>Redes Sociais</h6>
              <li><a href="https://www.facebook.com" target="self">Facebook</a></li>
              <li><a href="https://www.twitter.com" target="self">Twitter</a></li>
              <li><a href="https://www.instagram.com/" target="self">Instagram</a></li>
            </ul>
          </div>
          <div className="grid-item">
            <ul>
              <h6>Contato</h6>
              <li><a>Praça Liberdade</a></li>
              <li><a>Tel: 11 98602 9782</a></li>
              <li><a>Email: VeeGan@gmail.com</a></li>
            </ul>
          </div>
          <div className="grid-item">
            <ul>
              <h6>Ajuda</h6>
              <li><a href="#faleconosco">Fale Conosco</a></li>
            </ul>
          </div>
        </div>
        <br />
        <h6>Copyright &copy; 2024 - VeeGan</h6>
      </footer>
    </header>
    
    
  );
}

