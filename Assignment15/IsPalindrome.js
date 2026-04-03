import React, { useState } from 'react';

function IsPalindrome() {
    const [num, setNum] = useState("");
    const [result, setResult] = useState("");

    const checkPalindrome = () => {
        let str = num.toString();
        let reversed = str.split('').reverse().join('');

        if (str === reversed) {
            setResult("Palindrome Number");
        } else {
            setResult("Not a Palindrome");
        }
    };

    return (
        <div>
            <h2>Palindrome Checker</h2>

            <input 
                type="number"
                placeholder="Enter number"
                value={num}
                onChange={(e) => setNum(e.target.value)}
            />

            <br /><br />

            <button onClick={checkPalindrome}>Check</button>

            <h3>{result}</h3>
        </div>
    );
}

export default IsPalindrome;