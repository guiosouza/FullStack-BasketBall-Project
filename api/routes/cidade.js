import express from "express";
import { getCidade } from "../controllers/cidade.js"

const router = express.Router();

router.get("/", getCidade);

export default router;