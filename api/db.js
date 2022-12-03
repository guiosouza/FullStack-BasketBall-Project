import mysql from "mysql";

export const db = db.mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234567",
    database: "dbjcbc"
});