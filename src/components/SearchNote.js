import React from "react";

function SearchNote({ onSearchNote}) {
  return (
    <div className="note__search-note">
      <input type="text" placeholder="Search" onChange={(e) => onSearchNote(e)} />
    </div>
  );
}

export default SearchNote;
