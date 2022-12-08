import express from "express";
import { getJogador, addJogador, updateJogador, deleteJogador } from "../controllers/jogador.js"

const router = express.Router();

router.get("/", getJogador);

router.post("/createjogador", addJogador);

router.put("/updatejogador/:idjogador", updateJogador);

router.delete("/deletejogador/:idjogador", deleteJogador)

export default router;