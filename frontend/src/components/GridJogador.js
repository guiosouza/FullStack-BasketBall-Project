import React from "react";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const ThTitle = styled.h3`
  text-align: center;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};
  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const GridJogador = ({ jogador, setJogador, setOnEditJogador }) => {

  const handleEdit = (item) => {
    setOnEditJogador(item);
  };

  const handleDelete = async (idjogador) => {
    await axios
      .delete("http://localhost:8800/" + idjogador)
      .then(({ data }) => {
        const newArray = jogador.filter((jogador) => jogador.idjogador !== idjogador);

        setJogador(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEditJogador(null);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>ID Jogador</Th>
          <Th onlyWeb>Nome</Th>
          <Th>ID Time</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {jogador.map((item, i) => (
          <Tr key={i}>
            <Td width="30%">{item.idjogador}</Td>
            <Td width="30%">{item.nome}</Td>
            <Td width="30%">{item.equipe_idequipe}</Td>
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.equipe_idequipe)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default GridJogador;