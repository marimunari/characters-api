import sqlite3 from "sqlite3";

const DBSOURCE = 'db.sqlite';

const SQL_CHARACTERS_CREATE = `
    CREATE TABLE IF NOT EXISTS characters (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        history TEXT NOT NULL,
        appearance TEXT NOT NULL,
        personality TEXT NOT NULL,
        powers TEXT NOT NULL
    )
`;

const database = new sqlite3.Database(DBSOURCE, (error) => {
    if (error) {
        console.log(error.message);
        throw error;
    } else {
        console.log('Base de dados conectada com sucesso.');
        database.run(SQL_CHARACTERS_CREATE, (error) => {
            if (error) {
                console.log('Erro ao criar tabela.', error);
            } else {
                console.log('Tabela criada com sucesso.');
            }
        });
    }
})

export default database;