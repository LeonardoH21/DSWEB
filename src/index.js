import axios from "axios"; 
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form";
import Grid from "./components/Grid";
import Home from "./pages/home";
import Login from "./pages/Login";
import Senha from "./pages/Senha";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ComboSelection from "./pages/ComboSelection"; 
import Services from "./pages/Services";
import Dash from "./pages/Dash";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #333;
`;

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://4.228.224.171:5000");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Comandas do Dia</Title>
        <Routes>
          <Route exact path="/" element={<Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />} />
          <Route path="/combo" element={<ComboSelection />} />
        </Routes>
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
        <ToastContainer autoClose={3000} position="bottom-left" />
      </Container>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/senha" element={<Senha />} />
        <Route path="/app" element={<App />} />
        <Route path="/combo" element={<ComboSelection />} />
        <Route path="/services" element={<Services />} />
        <Route path="/dash" element={<Dash />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
