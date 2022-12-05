import express from "express";
import { getCidade, addCidade, updateCidade, deleteCidade } from "../controllers/cidade.js"

const router = express.Router();

router.get("/", getCidade);

router.post("/", addCidade)

router.put("/:idcidade", updateCidade)

router.delete("/:idcidade", deleteCidade)

export default router;