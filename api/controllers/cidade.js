import { db } from "../db";

export const getCidade = (_, res) => {
    const q = "SELECT * FROM cidade"

    db.query(q, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};