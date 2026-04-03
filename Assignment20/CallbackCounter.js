import React, { useState, useCallback } from 'react';

function CallbackCounter() {
    const [cnt, setCnt] = useState(0);

    const increment = useCallback(() => {
        setCnt(cnt + 1);
    }, []);

    const decrement = useCallback(() => {
        setCnt(cnt - 1);
    }, []);

    return (
        <div>
            <h2>Count: {cnt}</h2>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default CallbackCounter;