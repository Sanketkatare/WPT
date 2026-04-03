// Uncontrolled.js
import React, { useRef } from 'react';

function Uncontrolled() {
    const inputRef = useRef();

    const handleClick = () => {
        alert(inputRef.current.value);
    };

    return (
        <div>
            <input ref={inputRef} />
            <button onClick={handleClick}>Get Value</button>
        </div>
    );
}

export default Uncontrolled;