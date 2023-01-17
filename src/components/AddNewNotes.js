import React from "react";

class AddNewNotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: { title: "", body: "" },
      titleLimit: { inputJudul: "", limit: 50, char: 50 },
    };

    this.onJudulChangeEventHandler = this.onJudulChangeEventHandler.bind(this);
    this.onContentChangeEventHandler = this.onContentChangeEventHandler.bind(this);
    this.onCreateEventHandler = this.onCreateEventHandler.bind(this);
  }

  onJudulChangeEventHandler(event) {
    if (event.target.value.length <= 50) {
      this.setState((prevState) => {
        return {
          titleLimit: {
            ...prevState.titleLimit,
            inputJudul: event.target.value,
            char: prevState.titleLimit.limit - event.target.value.length,
          },
          note: {
            ...prevState.note,
            title: event.target.value,
          },
        };
      });
    }
  }

  onContentChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        note: {
          ...prevState.note,
          body: event.target.value,
        },
      };
    });
  }

  onCreateEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state.note);
    this.setState((prevState) => {
      return {
        note: {
          title: "",
          body: "",
        },
        titleLimit: {
          ...prevState.titleLimit,
          inputJudul: "",
          char: 50,
        },
      };
    });
  }

  render() {
    return (
      <div className="note-input">
        <button data-toggle="modal" data-target="#modalAddNotes" className="cursor-pointer">
          Add Note
        </button>
        <div
          className="modal fade"
          id="modalAddNotes"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="modalAddNotesCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content bg-modal-center">
              <div className="modal-body">
                <form onSubmit={this.onCreateEventHandler}>
                  <p
                    className={`note-input__title__char-limit ${
                      this.state.titleLimit.char === 0 ? "zero" : ""
                    }`}
                  >
                    Character remaining : {this.state.titleLimit.char}
                  </p>
                  <input
                    className="note-input__title"
                    type="text"
                    value={this.state.note.title}
                    onChange={this.onJudulChangeEventHandler}
                    placeholder="Title"
                    required
                  />
                  <textarea
                    className="note-input__body"
                    type="text"
                    value={this.state.note.body}
                    onChange={this.onContentChangeEventHandler}
                    placeholder="Type your note here"
                    required
                  />
                  <button type="submit">Create</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewNotes;
