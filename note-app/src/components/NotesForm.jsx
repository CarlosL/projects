import React, { useState } from "react";
import Draggable, {DraggableCore} from 'react-draggable';
import './notesForm.css';

function NotesForm() {
    const [isOpen, setIsOpen] = useState(true)
    const [color, setColor] = useState('rgb(255, 234, 117)')
    const [showColorOptions, setShowColorOptions] = useState(false)

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleColorChange = (selectedColor) => {
        setColor(selectedColor)
        setShowColorOptions(false)
    }

    const toggleColorOptions = () => {
        setShowColorOptions(!showColorOptions)
    }

    const colorOptions = ['rgb(255, 234, 117)', 'rgb(117, 181, 255)', 'rgb(152, 255, 149)', 'white', 'rgb(255, 167, 251)']
 
    return (
        <>
            {isOpen && (
                <Draggable handle=".handle" defaultPosition={{ x: 0, y: 0 }}>
                <div className="post-it" style={{ backgroundColor: color }}>
                    <div className="handle">
                        <button className="options" onClick={handleClose}><i className="bi bi-x"></i></button>
                        <button className="options" onClick={toggleColorOptions}><i className="bi bi-gear"></i></button>
                        {showColorOptions && (
                            <ul>
                                {colorOptions.map((option, index) => (
                                    <li key={index}>
                                        <button className="post-it-color" style={{ backgroundColor: option}}
                                        onClick={() => handleColorChange(option)}></button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <textarea></textarea>
                    <div className="handle"></div>
                </div>
                </Draggable>
            )}
        </>
    )
}

export default NotesForm;