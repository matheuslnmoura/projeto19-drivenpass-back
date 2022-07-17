import { Request, Response } from 'express';
import { createNoteService } from '../services/noteService.js';

import { NoteData } from '../services/noteService.js';

export async function createNoteController(req: Request, res: Response) {
  const userInfo = res.locals.user;
  const noteInfo: NoteData = req.body;
  const { id: userId }: {id: number}= userInfo;
  const insertResponse = await createNoteService(noteInfo, userId);

  res.status(201).send(insertResponse);
}


