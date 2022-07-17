import { deleteNoteById, getNoteByIdAndUserId, getNoteByTitleAndUserId, getNotesByUserId, insertNote } from '../repositories/notesRepository.js';

export type NoteData = {
  title: string;
  note: string
}

export async function createNoteService(noteInfo: NoteData, userId: number) {
  const {title} = noteInfo;
  await checkIfNoteTitleUnique(title, userId);
  const insertResult = await insertNote(noteInfo, userId);
  return insertResult;
}

async function checkIfNoteTitleUnique(title: string, userId: number) {
  const result = await getNoteByTitleAndUserId(title, userId);
  if(result) {
    throw {code: 401, message: 'Note title should be unique. Choose a different title'};
  }
  return;
}

export async function getNotesService(userId: number) {
  const notes = await getNotesByUserId(userId);
  if(notes.length === 0) {
    throw {code: 404, message: 'No notes found.'};
  }
  return notes;
}

export async function getNoteByIdService(noteIdString: string, userId: number) {
  const noteId = parseInt(noteIdString);
  const note = await checkIfNoteIsFromUser(noteId, userId);
  return note;
}

async function checkIfNoteIsFromUser(noteId: number, userId: number) {
  const note = await getNoteByIdAndUserId(noteId, userId);
  if(!note) {
    throw{ code: 404, message: 'Note not found'};
  }
  return note;
}

export async function deleteNoteByIdService(noteIdString: string, userId: number) {
  const noteId = parseInt(noteIdString);
  await checkIfNoteIsFromUser(noteId, userId);
  const deletedNote = await deleteNoteById(noteId);
  return deletedNote;
}