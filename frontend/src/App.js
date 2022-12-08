import GlobalStyle from "./styles/global.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import FormCidade from "./components/FormCidade";
import GridCidade from "./components/GridCidade";
import FormJogador from "./components/FormJogador";
import GridJogador from "./components/GridJogador"
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Navbar from "./components/Navbar/index.js";


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

  const [jogador, setJogador] = useState([]);
  const [onEditJogador, setOnEditJogador] = useState(null);

  const getJogador = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setJogador(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getJogador();
  }, [setJogador]);

  return (
    <>
      <Navbar/>
      <Container>
        <Title>CADASTRO DE CIDADES E EQUIPES</Title>
        <FormCidade onEdit={onEdit} setOnEdit={setOnEdit} getCidade={getCidade} />
        <GridCidade cidade={cidade} setCidade={setCidade} setOnEdit={setOnEdit} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
      <Container>
        <Title>CADASTRO DE JOGADORES</Title>
        <FormJogador onEditJogador={onEditJogador} setOnEditJogador={setOnEditJogador} getJogador={getJogador}/>
        <GridJogador jogador={jogador} setJogador={setJogador} setOnEditJogador={setOnEditJogador} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
