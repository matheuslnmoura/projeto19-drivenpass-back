import { Router } from 'express';
import { createNoteController } from '../controllers/notesController.js';
import { validateNoteInfo } from '../middlewares/noteValidation.js';
import verifyToken from '../middlewares/tokenValidation.js';

const notesRouter = Router();

notesRouter.post('/create-note', verifyToken, validateNoteInfo, createNoteController);

export default notesRouter;