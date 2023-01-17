import React from "react";
import Blank from "./Blank";
import SheetNotes from "./SheetNotes";

const ArchiveNotes = ({ notes, onDelete, onChangeArchive }) => {
  const arsipNotes = !notes.length
    ? []
    : notes.filter((note) => note.archived === true);

  return (
    <>
      <h2>Archive Notes</h2>
      {arsipNotes.length === 0 ? (
        <Blank />
      ) : (
        <div className="notes-list">
          {arsipNotes.map((note, id) => {
            return (
              <SheetNotes
                key={id}
                note={note}
                onDelete={onDelete}
                onChangeArchive={onChangeArchive}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default ArchiveNotes;
