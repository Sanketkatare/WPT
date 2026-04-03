import React, { useState, useCallback } from 'react';

function UseCallbackDemo() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        console.log("Function recreated?");
        setCount(prev => prev + 1);
    }, []);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default UseCallbackDemo;