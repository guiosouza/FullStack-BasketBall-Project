import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import axios from "axios";

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

const Form = ({ getCidade, onEdit, setOnEdit }) => {

  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.idcidade.value = onEdit.idcidade;
      user.nome.value = onEdit.nome;
      user.time_idtime.value = onEdit.time_idtime;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cidade = ref.current;

    if (
      !cidade.idcidade.value ||
      !cidade.nome.value ||
      !cidade.time_idtime.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.idcidade, {
          idcidade: cidade.idcidade.value,
          nome: cidade.nome.value,
          time_idtime: cidade.time_idtime.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          idcidade: cidade.idcidade.value,
          nome: cidade.nome.value,
          time_idtime: cidade.time_idtime.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    cidade.idcidade.value = "";
    cidade.nome.value = "";
    cidade.time_idtime.value = "";

    setOnEdit(null);
    getCidade();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit} >
      <InputArea>
        <Label>ID cidade</Label>
        <Input name="idcidade" />
      </InputArea>
      <InputArea>
        <Label>Nome da cidade</Label>
        <Input name="nome" type="text" />
      </InputArea>
      <InputArea>
        <Label>ID da equipe</Label>
        <Input name="time_idtime" />
      </InputArea>
      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;