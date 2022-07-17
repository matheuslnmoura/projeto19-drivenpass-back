import { Router } from 'express';
import { createNoteController, getNoteByIdController, getNotesController } from '../controllers/notesController.js';
import { validateNoteInfo } from '../middlewares/noteValidation.js';
import verifyToken from '../middlewares/tokenValidation.js';

const notesRouter = Router();

notesRouter.post('/create-note', verifyToken, validateNoteInfo, createNoteController);
notesRouter.get('/notes', verifyToken, getNotesController);
notesRouter.get('/notes/:id', verifyToken, getNoteByIdController);

export default notesRouter;