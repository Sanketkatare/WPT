import React, { useState, useEffect } from 'react';

function UseEffectDemo() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component Mounted / Updated");

        return () => {
            console.log("Cleanup (Unmount)");
        };
    }, [count]);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Update</button>
        </div>
    );
}

export default UseEffectDemo;