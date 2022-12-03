import express  from "express";
import cors from "cors";
import cidadeRoutes from "./routes/cidade.js"


const app = express();

app.use(express.json());
app.use(cors());

app.use("/", cidadeRoutes);

// Porta para escutar
app.listen(8800);
