import React from "react";

function Note() {
    return (
        <div className="sticky-note">
            <form>
                <input type="text" placeholder="Title"/><br />
                <textarea />
            </form>
        </div>
    );
}

export default Note;