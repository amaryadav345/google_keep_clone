import React from "react";
import './CreateNote.css';

const CreateNote=()=>{
    return(
        <div className="createNote">
         <div className="card">  
            <input type="text" placeholder="Create Note "/>
            <br/>
            <textarea className="" rows="" column="" placeholder="Write a note here"/>
        </div>
        </div> 
    )

}

export default CreateNote;