import React, { useState } from 'react';

function PrevStateDemo() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(prev => prev + 1);
    };

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increase}>Increment</button>
        </div>
    );
}

export default PrevStateDemo;