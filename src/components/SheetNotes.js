import React from "react";
import { showFormattedDate } from "../utils";

const SheetNotes = ({ note, onDelete, onChangeArchive }) => {
  return (
    <div className="note-sheet">
      <div className="note-sheet__mycontent">
        <h3 className="note-sheet__title">{note.title}</h3>
        <p className="note-sheet__date">{showFormattedDate(note.createdAt)}</p>
        <p className="note-sheet__body">{note.body}</p>
      </div>
      <div className="note-sheet__action">
        <button
          className="note-sheet__delete-button"
          onClick={() => onDelete(note.id)}
        >
          Delete
        </button>
        <button
          className="note-sheet__archive-button"
          onClick={() => onChangeArchive(note.id)}
        >
          {!note.archived ? "Archive" : "Move"}
        </button>
      </div>
    </div>
  );
};

export default SheetNotes;
