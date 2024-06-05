import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ComboSearch from '../components/ComboSearch';
import Grid from '../components/SimlpleGrid';
import axios from 'axios';

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: #3e2723; /* Tom de marrom escuro */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-left: auto;
  margin-right: auto;
`;

const GridTitle = styled.h3`
  color: white; /* Fonte branca */
  text-align: center;
  margin-top: 20px;
`;

const ComboSelection = () => {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await axios.get('http://4.228.224.171:5000');
      setAllUsers(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <GridTitle>Seleção de Combos</GridTitle>
      <ComboSearch setUsers={setUsers} />
      <GridTitle>Resultados da Pesquisa</GridTitle>
      <Grid users={users} setUsers={setUsers} setOnEdit={() => {}} />
      <GridTitle>Todos os Registros</GridTitle>
      <Grid users={allUsers} setUsers={setAllUsers} setOnEdit={() => {}} />
    </Container>
  );
};

export default ComboSelection;
