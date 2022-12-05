import { db } from "../db.js";

export const getCidade = (_, res) => {
    const q = "SELECT * FROM cidade"

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};


export const addCidade = (req, res) => {
    const q =
        "INSERT INTO (`idcidade`, `nome`, `time_idtime`) VALUES(?)";

    const values = [
        req.body.idcidade,
        req.body.nome,
        req.body.time_idtime,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Cidade cadastrada com sucesso.");
    });
};