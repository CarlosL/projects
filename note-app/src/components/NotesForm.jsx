import React, { useState } from "react";
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
        <div className="note-form">
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
            </form>
        </div>
    )
}

export default NotesForm;