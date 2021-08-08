import React, { useState } from "react";
import "./CreateNote.css";
import Notes from "./Notes";
const CreateNote = () => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [noteList, setNoteList] = useState([]);

  const addNote = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setNote((oldValue) => {
      return { ...oldValue, [name]: value };
    });
  };

  const addNoteList = () => {
    setNoteList((arrValue) => {
      return [...arrValue, note];
    });
    console.log("noteList value is ", noteList);
  };

  return (
    <div>
      <div className="createNote">
        <div className="card">
          <input
            className="notesInp"
            name="title"
            value={note.title}
            type="text"
            placeholder="Create Note "
            onChange={addNote}
          />
          <br />
          <textarea
            className="textarea"
            name="content"
            value={note.content}
            onChange={addNote}
            placeholder="Write a note here"
          />
          <button className="addButton" onClick={addNoteList}>
            +
          </button>
        </div>
      </div>
      <Notes notesData={note} />
    </div>
  );
};

export default CreateNote;
