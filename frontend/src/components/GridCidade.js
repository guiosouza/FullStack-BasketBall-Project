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

const GridCidade = ({ cidade, setCidade, setOnEdit }) => {

  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (idcidade) => {
    await axios
      .delete("http://localhost:8800/" + idcidade)
      .then(({ data }) => {
        const newArray = cidade.filter((cidade) => cidade.idcidade !== idcidade);

        setCidade(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
      <Table>
        <Thead>
          <Tr>
            <Th>ID Cidade</Th>
            <Th onlyWeb>Cidade</Th>
            <Th>ID Time</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {cidade.map((item, i) => (
            <Tr key={i}>
              <Td width="30%">{item.idcidade}</Td>
              <Td width="30%">{item.nome}</Td>
              <Td width="30%">{item.time_idtime}</Td>
              <Td alignCenter width="5%">
                <FaEdit onClick={() => handleEdit(item)} />
              </Td>
              <Td alignCenter width="5%">
                <FaTrash onClick={() => handleDelete(item.idcidade)} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
  );
};

export default GridCidade;