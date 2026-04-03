import React, { useState, useEffect, useCallback } from 'react';

function PasswordGenerator() {
    const [length, setLength] = useState(8);
    const [password, setPassword] = useState("");

    // useCallback for optimization
    const generatePassword = useCallback(() => {
        let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#";
        let pass = "";

        for (let i = 0; i < length; i++) {
            let random = Math.floor(Math.random() * chars.length);
            pass += chars[random];
        }

        setPassword(pass);
    }, [length]);

    // useEffect (auto-generate when length changes)
    useEffect(() => {
        generatePassword();
    }, [generatePassword]);

    return (
        <div>
            <h2>Password Generator</h2>

            <input
                type="number"
                value={length}
                onChange={(e) => setLength(e.target.value)}
            />

            <button onClick={generatePassword}>Generate</button>

            <h3>{password}</h3>
        </div>
    );
}

export default PasswordGenerator;