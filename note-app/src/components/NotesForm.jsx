import React, { useState } from "react";
import Draggable from 'react-draggable';
import './notesForm.css';

function NotesForm() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        setTitle('')
        setContent('')
    }
    return (
        <Draggable handle=".drag-zone" defaultPosition={{ x: 20, y: 20 }}>
            <div className="note-form">
                <div className="drag-zone"></div>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input type="text" placeholder="Title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}/>
                    </label>
                    <br />
                    <label>
                        <textarea value={content} placeholder="Content"
                        onChange={(event) => setContent(event.target.value)} />
                    </label>
                    <br />
                    <button type="submit">Save</button>
                    <div className="drag-zone"></div>
                </form>
            </div>
        </Draggable>
    )
}

export default NotesForm;