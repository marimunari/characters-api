import Character from "../models/character";
import database from "./database";

const charactersRepository = {
    create: (character: Character, callback: (id?: number) => void) => {
        const sql = 'INSERT INTO characters (name, description, history, appearance, personality, powers) VALUES (?, ?, ?, ?, ?, ?)';
        
        const params = [character.name, character.description, character.history, character.appearance, character.personality, character.powers];
        database.run(sql, params, function(_err) {
            callback(this?.lastID)
        })
    },

    getAll: (callback: (characters: Character[]) => void) => {
        const sql = 'SELECT * FROM characters';

        const params: any[] = [];
        database.all(sql, params, (_err, rows: Character[]) => callback(rows))
    },

    get: (id: number, callback: (character?: Character) => void) => {
        const sql = 'SELECT * FROM characters WHERE id = ?';

        const params = [id];
        database.get(sql, params, (_err, row: Character) => callback(row));
    },

    update: (id: number, character: Character, callback: (notFound: boolean) => void) => {
        const sql = 'UPDATE characters SET name = ?, description = ?, history = ?, appearance = ?, personality = ?, powers = ? WHERE id = ?';

        const params = [character.name, character.description, character.history, character.appearance, character.personality, character.powers, id];
        database.run(sql, params, function(_err) {
            callback(this.changes === 0);
        });
    },

    delete: (id: number, callback: (notFound: boolean) => void) => {
        const sql = 'DELETE FROM characters WHERE id = ?';

        const params = [id];
        database.run(sql, params, function(_err) {
            callback(this.changes === 0);
        });
    },
}

export default charactersRepository;