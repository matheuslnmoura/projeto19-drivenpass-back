import { getNoteByTitleAndUserId, insertNote } from '../repositories/notesRepository.js';

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