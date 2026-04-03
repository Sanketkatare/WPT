import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    const calculate = (operation) => {
        let res = 0;

        switch (operation) {
            case 'add':
                res = Number(num1) + Number(num2);
                break;
            case 'sub':
                res = num1 - num2;
                break;
            case 'mul':
                res = num1 * num2;
                break;
            case 'div':
                res = num2 != 0 ? num1 / num2 : "Cannot divide by 0";
                break;
            default:
                break;
        }

        setResult(res);
    };

    return (
        <div>
            <h2>Calculator</h2>

            <input type="number" onChange={(e) => setNum1(e.target.value)} />
            <input type="number" onChange={(e) => setNum2(e.target.value)} />

            <ChildComponent onSelect={calculate} />

            <h3>Result: {result}</h3>
        </div>
    );
}

export default ParentComponent;