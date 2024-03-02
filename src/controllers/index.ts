import { Request, Response } from "express"
import Character from "../models/character"
import charactersRepository from "../repositories/characters-repository";

const getAllCharacters = (req: Request, res: Response): void => {
    charactersRepository.getAll((characters) =>  res.json(characters));
}

const getCharacter = (req: Request, res: Response): void => {
    const id: number = +req.params.id;
    charactersRepository.get(id, (character) => {
        if (character) {
            res.json(character);
        } else {
            res.status(404).send();
        }
    });
}

const createCharacter = (req: Request, res: Response): void => {
    const character: Character = req.body;
    charactersRepository.create(character, (id) => {
        if (id) {
            res.status(201).location(`/characters/${id}`).send();
        } else {
            res.status(400).send();
        }
    });
}

const updateCharacter = (req: Request, res: Response): void => {
    const id: number = +req.params.id;
    charactersRepository.update(id, req.body, (notFound) => {
        if (notFound) {
            res.status(404).send();
        } else {
            res.status(204).send()
        }
    });
}

const deleteCharacter = (req: Request, res: Response): void => {
    const id: number = +req.params.id;
    charactersRepository.delete(id, (notFound) => {
        if (notFound) {
            res.status(404).send();
        } else {
            res.status(204).send();
        }
    });
}

export { getAllCharacters, getCharacter, createCharacter, updateCharacter, deleteCharacter }