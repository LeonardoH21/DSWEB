import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const ExitButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #ff4d4f;
  color: white;
  height: 42px;
  margin-left: 10px;
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.cpf.value = onEdit.cpf;
      user.fone.value = onEdit.fone;
      user.procedimento.value = onEdit.procedimento;
      user.horario.value = onEdit.horario;
      user.data_agendamento.value = onEdit.data_agendamento;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.nome.value ||
      !user.cpf.value ||
      !user.fone.value ||
      !user.procedimento.value ||
      !user.horario.value ||
      !user.data_agendamento.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://4.228.224.171:5000/" + onEdit.id, {
          nome: user.nome.value,
          cpf: user.cpf.value,
          fone: user.fone.value,
          procedimento: user.procedimento.value,
          horario: user.horario.value,
          data_agendamento: user.data_agendamento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://4.228.224.171:5000/", {
          nome: user.nome.value,
          cpf: user.cpf.value,
          fone: user.fone.value,
          procedimento: user.procedimento.value,
          horario: user.horario.value,
          data_agendamento: user.data_agendamento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.nome.value = "";
    user.cpf.value = "";
    user.fone.value = "";
    user.procedimento.value = "";
    user.horario.value = "";
    user.data_agendamento.value = "";

    setOnEdit(null);
    getUsers();
  };

  const handleExit = () => {
    window.location.href = "/";
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
      </InputArea>
      <InputArea>
        <Label>CPF</Label>
        <Input name="cpf" />
      </InputArea>
      <InputArea>
        <Label>Telefone</Label>
        <Input name="fone" />
      </InputArea>
      <InputArea>
        <Label>Procedimento</Label>
        <Input name="procedimento" />
      </InputArea>
      <InputArea>
        <Label>Horário</Label>
        <Input name="horario" type="time" />
      </InputArea>
      <InputArea>
        <Label>Data de Agendamento</Label>
        <Input name="data_agendamento" type="date" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
      <ExitButton type="button" onClick={handleExit}>SAIR</ExitButton>
    </FormContainer>
  );
};

export default Form;
