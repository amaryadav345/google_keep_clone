import React from "react";

const Notes = (props) => {
  return (
    <div>
      <input type="text" value={props.notesData.title} />
      <br />
      <textarea value={props.notesData.content} />
    </div>
  );
};
export default Notes;
