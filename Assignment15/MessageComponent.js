import React, { useState } from 'react';

function MessageComponent() {
    const [text, setText] = useState("");

    const handleClick = () => {
        console.log("Message:", text);
    };

    return (
        <div>
            <h2>Message Logger</h2>

            <input 
                type="text"
                placeholder="Enter message"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <br /><br />

            <button onClick={handleClick}>Submit</button>
        </div>
    );
}

export default MessageComponent;