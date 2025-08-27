import React, { useState } from 'react'
import "../App.css";

export default function TextForm(props) {
    document.title = "TextUtils - Home";

    const [text, setText] = useState("");
    const havdelOnChange = (e) => {
        setText(e.target.value);
    }
    const upperCase = () => {
        setText(text.toUpperCase());
    }
    const lowerCase = () => {
        setText(text.toLowerCase());
    }

    const handelCopy = () => {
        const textBox = document.getElementById("textInput");
        textBox.select();
        navigator.clipboard.writeText(textBox.value);
    }

    const handelExtraSpaces = () => {
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    return (
        <>
            <h3 className='heading'>Write Text Below</h3>
            <div className="mb-3">
                <textarea className="form-control bg-light" value={text} data-bs-theme="light" onChange={havdelOnChange} id="textInput" rows="8" placeholder='Enter text to convert'></textarea>
                <button type="button" onClick={upperCase} className="btn btn-primary mt-3">UPPERCASE</button>
                <button type="button" onClick={lowerCase} className="btn btn-primary mt-3">lowercase</button>
                <button type="button" onClick={handelCopy} className="btn btn-primary mt-3">Copy text</button>
                <button type="button" onClick={handelExtraSpaces} className="btn btn-primary mt-3">Remove extra spaces</button>
            </div>
            <div className="container">
                <p>Words: {text === "" ? 0 : text.split(" ").length} Letters: {text.length}</p>
                <p>Time to read: {text === "" ? 0 : (text.split(" ").length) * 0.24} seconds</p>
            </div>
        </>
    )
}
