import React, { useState, useContext } from "react";
import NoteContext from '../context/notes/NoteContext';
const AddNote = (props) => {
    
    const context = useContext (NoteContext);
    const {addNote} = context;

    const [note, setNotes] = useState({title: "", description:"", tag:""})

    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNotes({title: "", description:"", tag:""})
        props.showAlert("Added Successfully", "success")
    }

    const onChange=(e)=>{
        setNotes({...note, [e.target.name]: e.target.value})
    }
  return (
    <div>
      <div className="container my-3">
        <h1> Add a Note </h1>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              value={note.title}
              minLength={5}
              required
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              value={note.description}
              minLength={5}
              required
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              value={note.tag}
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
            />
          </div>
          
          <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>
            Add Notes
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
