import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { toast } from 'react-toastify';

const SearchContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  width: 200px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const ComboSearch = ({ setUsers }) => {
  const [combo, setCombo] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = async () => {
    try {
      const res = await axios.get('http://localhost:8800/search', {
        params: { combo, data_agendamento: date }
      });
      setUsers(res.data);
      if (res.data.length === 0) {
        toast.info('Nenhum registro encontrado');
      } else {
        toast.success('Registros encontrados');
      }
    } catch (error) {
      console.error(error);
      toast.error('Erro ao buscar registros');
    }
  };

  return (
    <SearchContainer>
      <InputArea>
        <Label>Combo</Label>
        <Input value={combo} onChange={(e) => setCombo(e.target.value)} />
      </InputArea>
      <InputArea>
        <Label>Data de Agendamento</Label>
        <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </InputArea>
      <Button onClick={handleSearch}>Buscar</Button>
    </SearchContainer>
  );
};

export default ComboSearch;
