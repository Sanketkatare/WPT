import React, { useState, useEffect } from 'react';

function ErrorHandling() {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch('https://wrongapi.com/data') // wrong URL
            .then(res => {
                if (!res.ok) {
                    throw new Error("API Error");
                }
                return res.json();
            })
            .then(data => setData(data))
            .catch(err => setError(err.message));
    }, []);

    return (
        <div>
            <h2>Error Handling</h2>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {data.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );
}

export default ErrorHandling;