import React from "react";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";

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

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const Th = styled.th`
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

export const Td = styled.td`
  padding: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};
  font-size: 14px;
  color: #555;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }

  svg {
    cursor: pointer;
    color: #888;

    &:hover {
      color: #555;
    }
  }
`;

const Grid = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); 
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir este registro?");
    if (confirmDelete) {
      try {
        await axios.delete("http://4.228.224.171:5000/" + id);
        const newArray = users.filter((user) => user.id !== id);
        setUsers(newArray);
        toast.success("Registro excluído com sucesso.");
      } catch (error) {
        toast.error("Erro ao excluir o registro.");
      }
      setOnEdit(null);
    }
  };
  

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>CPF</Th>
          <Th>Procedimento</Th>
          <Th>Horário</Th>
          <Th>Data</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td width="22%">{item.nome}</Td>
            <Td width="18%">{item.cpf}</Td>
            <Td width="18%">{item.procedimento}</Td>
            <Td width="13%">{item.horario}</Td>
            <Td width="20%">{formatDate(item.data_agendamento)}</Td>
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
