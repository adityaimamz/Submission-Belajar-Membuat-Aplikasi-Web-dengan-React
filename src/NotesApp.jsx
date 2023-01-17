import React from "react";
import { getInitialData } from "./utils";
import MyNotes from "./components/MyNotes";
import AddNewNotes from "./components/AddNewNotes";
import ArchiveNotes from "./components/ArchiveNotes";
import Navbar from "./components/Navbar";
import SearchNote from "./components/SearchNote";


class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchNotes: getInitialData(),
    };

    this.onChangeArchiveNoteHandler = this.onChangeArchiveNoteHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    this.onAddNewNoteHandler = this.onAddNewNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.addToLocalStorage = this.addToLocalStorage.bind(this);
  }


  onChangeArchiveNoteHandler(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.map((note) =>
          note.id === id ? { ...note, archived: !note.archived } : note
        ),
        searchNotes: prevState.searchNotes.map((note) =>
          note.id === id ? { ...note, archived: !note.archived } : note
        ),
      };
    });
  }

  onSearchNoteHandler(e) {
    this.setState((prevState) => {
      return {
        searchNotes: prevState.notes.filter((note) =>
          note.title.toLowerCase().includes(e.target.value.toLowerCase())
        ),
      };
    });
  }

  onAddNewNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          // Spread Operator

          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
        searchNotes: [
          ...prevState.searchNotes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    const searchNotes = this.state.searchNotes.filter((note) => note.id !== id);
    this.setState({
      notes: notes,
      searchNotes: searchNotes,
    });
  }

  addToLocalStorage({ title, body }) {
    this.onAddNewNoteHandler({ title, body });
  }

  render() {
    return (
      <>
        <Navbar />
        <SearchNote onSearchNote={this.onSearchNoteHandler} />

        {localStorage.setItem("NOTES_APP", JSON.stringify(this.state.notes))}
        <div className="note-app__body">
          <AddNewNotes addNote={this.addToLocalStorage} />

          <MyNotes
            notes={this.state.searchNotes}
            onDelete={this.onDeleteHandler}
            onChangeArchive={this.onChangeArchiveNoteHandler}
          />
          
          <ArchiveNotes
            notes={this.state.searchNotes}
            onDelete={this.onDeleteHandler}
            onChangeArchive={this.onChangeArchiveNoteHandler}
          />
        </div>
      </>
    );
  }
}

export default NotesApp;
