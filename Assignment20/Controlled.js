// Controlled.js
import React, { useState } from 'react';

function Controlled() {
    const [name, setName] = useState("");

    return (
        <div>
            <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>{name}</p>
        </div>
    );
}

export default Controlled;