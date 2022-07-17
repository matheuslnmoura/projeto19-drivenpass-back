import db from '../config/database.js';

import { NoteData } from '../services/noteService.js';

export async function getNotesByUserId(userId: number) {
  return await db.notes.findMany({
    where: {
      userId
    }
  });
}

export async function getNoteByTitleAndUserId(title: string, userId: number ) {
  return await db.notes.findFirst({
    where: {
      title, 
      userId
    }
  });
}

export async function getNoteByIdAndUserId(noteId: number, userId: number) {
  return await db.notes.findFirst({
    where: {
      id: noteId,
      userId
    }
  });
}

export async function insertNote(noteInfo: NoteData, userId: number) {
  const{title, note} = noteInfo;
  return await db.notes.create({
    data:{
      title,
      note,
      userId
    }
  });
}

export async function deleteNoteById(noteId: number) {
  return await db.notes.delete({
    where: {
      id: noteId,
    }
  });
}