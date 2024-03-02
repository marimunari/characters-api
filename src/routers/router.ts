import { Router } from 'express';
import { createCharacter, getAllCharacters, getCharacter, updateCharacter, deleteCharacter } from '../controllers';

const router: Router = Router();

router.post("/create-character", createCharacter);
router.get("/characters", getAllCharacters);
router.get("/characters/:id", getCharacter);
router.put("/update-character/:id", updateCharacter);
router.delete("/delete-character/:id", deleteCharacter);

export default router;