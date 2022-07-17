import { Request, Response } from 'express';
import { createNoteService, deleteNoteByIdService, getNoteByIdService, getNotesService } from '../services/noteService.js';

import { NoteData } from '../services/noteService.js';

export async function createNoteController(req: Request, res: Response) {
  const userInfo = res.locals.user;
  const noteInfo: NoteData = req.body;
  const { id: userId }: {id: number}= userInfo;
  const insertResponse = await createNoteService(noteInfo, userId);

  res.status(201).send(insertResponse);
}

export async function getNotesController(req: Request, res: Response) {
  const {id: userId} = res.locals.user;
  const notes = await getNotesService(userId);
  res.status(200).send(notes);
}

export async function getNoteByIdController(req: Request, res: Response) {
  const {id: userId} = res.locals.user;
  const {id: noteId} = req.params;
  const note = await getNoteByIdService(noteId, userId);
  res.status(200).send(note);
}

export async function deleteNoteById(req: Request, res: Response) {
  const {id: userId} = res.locals.user;
  const {id: noteId} = req.params;
  const deletedNote = await deleteNoteByIdService(noteId, userId);
  res.status(200).send(deletedNote);
}