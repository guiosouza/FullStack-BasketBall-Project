import GlobalStyle from "./styles/global.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import Form from "./components/Form";
import Grid from "./components/Grid";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  const [cidade, setCidade] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getCidade = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setCidade(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getCidade();
  }, [setCidade]);

  return (
    <>
      <Container>
        <Title>PARTIDAS DE BASQUETE</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getCidade={getCidade}/>
        <Grid cidade={cidade} setCidade={setCidade} setOnEdit={setOnEdit}/>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
