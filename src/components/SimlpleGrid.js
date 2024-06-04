import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  max-width: 100%;
  margin: 20px auto;
  word-break: break-all;
  font-family: 'Arial', sans-serif;
`;

const Thead = styled.thead``;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const Th = styled.th`
  text-align: start;
  border-bottom: 2px solid #ccc;
  padding: 10px 15px;
  font-weight: bold;
  font-size: 16px;
  color: #333;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Td = styled.td`
  padding: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};
  font-size: 14px;
  color: #555;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const SimpleGrid = ({ users }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); 
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>CPF</Th>
          <Th>Combo</Th>
          <Th>Horário</Th>
          <Th>Data</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td width="22%">{item.nome}</Td>
            <Td width="18%">{item.cpf}</Td>
            <Td width="18%">{item.combo}</Td>
            <Td width="13%">{item.horario}</Td>
            <Td width="20%">{formatDate(item.data_agendamento)}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default SimpleGrid;
