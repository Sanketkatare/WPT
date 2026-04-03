import React, { useState } from 'react';

function ColorChanger() {
    const [bgColor, setBgColor] = useState("cyan");

    return (
        <div style={{ backgroundColor: bgColor, height: "100vh", padding: "20px" }}>
            <h2>Background Color Changer</h2>

            <button onClick={() => setBgColor("red")}>Red</button>
            <button onClick={() => setBgColor("yellow")}>Yellow</button>
            <button onClick={() => setBgColor("green")}>Green</button>
            <button onClick={() => setBgColor("blue")}>Blue</button>
            <button onClick={() => setBgColor("orange")}>Orange</button>
        </div>
    );
}

export default ColorChanger;