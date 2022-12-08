import { db } from "../db.js";

export const getJogador = (_, res) => {
    const q = "SELECT * FROM jogador";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};


export const addJogador = (req, res) => {
    const q = "INSERT INTO jogador (`idjogador`, `nome`, `equipe_idequipe`) VALUES(?)";

    const values = [
        req.body.idjogador,
        req.body.nome,
        req.body.equipe_idequipe,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Jogador cadastrada com sucesso.");
    });
};

export const updateJogador = (req, res) => {
    const q = "UPDATE cidade SET `idjogador` = ?,  `nome` = ?, `equipe_idequipe` = ?, WHERE `idjogador` = ?";

    const values = [
        req.body.idjogador,
        req.body.nome,
        req.body.equipe_idequipe,
    ];

    db.query(q, [...values, req.params.idjogador], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Dados do jogador atualizados com sucesso.");
    });
};

export const deleteJogador = (req, res) => {
    const q = "DELETE FROM jogador WHERE `idjogador` = ?";

    db.query(q, [req.params.idjogador], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Jogador deletado com sucesso.");
    });
};