import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Importe o vídeo
import backgroundVideo from './BackgroundVideo.mp4';

const DashContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const ContentContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.9); 
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #2E8B57;
    color: white;
  }
`;

const Dash = () => {
  return (
    <DashContainer>
      <VideoBackground autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <ContentContainer>
        <Title>DashBoard</Title>
        <ButtonContainer>
          <Button to="/app" style={{ backgroundColor: '#2E8B57', color: 'white' }}>
            Cadastro de Combos
          </Button>
          <Button to="/Combo" style={{ backgroundColor: '#90EE90', color: '#333' }}>
            Seleção de Combos
          </Button>
        </ButtonContainer>
      </ContentContainer>
    </DashContainer>
  );
};

export default Dash;
