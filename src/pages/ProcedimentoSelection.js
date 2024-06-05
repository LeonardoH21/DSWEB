import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProcedimentoSearch from '../components/ProcedimentoSearch';
import SimpleGrid from '../components/SimpleGrid';
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

const ProcedimentoSelection = () => {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await axios.get('http://4.228.224.171:5000');
      setAllUsers(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <GridTitle>Seleção de Procedimentos</GridTitle>
      <ProcedimentoSearch setUsers={setUsers} />
      <GridTitle>Resultados da Pesquisa</GridTitle>
      <SimpleGrid users={Array.isArray(users) ? users : []} />
      <GridTitle>Todos os Registros</GridTitle>
      <SimpleGrid users={Array.isArray(allUsers) ? allUsers : []} />
    </Container>
  );
};

export default ProcedimentoSelection;
