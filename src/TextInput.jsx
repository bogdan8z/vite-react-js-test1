import { useState } from "react";

function TextInput(){
    const [text, setText] = useState('');
    const handleTextChange = (event) =>         setText(event.target.value);
    

    return (
        <div>
            <input type="text" value={text} onChange={handleTextChange}></input>
            <p>You typed: {text}</p>
            <br />
            <br />
        </div>
    );
}

export default TextInput;