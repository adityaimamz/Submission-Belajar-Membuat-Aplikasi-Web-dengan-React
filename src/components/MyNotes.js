import React from "react";
import Blank from "./Blank";
import SheetNotes from "./SheetNotes";

const MyNotes = ({ notes, onDelete, onChangeArchive }) => {
  const activeNotes = !notes.length
    ? []
    : notes.filter((note) => note.archived === false);

  return (
    <>
      <h2>My Notes</h2>
      {activeNotes.length === 0 ? (
        <Blank />
      ) : (
        <div className="notes-list">
          {activeNotes.map((note, idx) => {
            return (
              <SheetNotes
                key={idx}
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

export default MyNotes;
