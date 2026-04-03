import React from 'react';

function Dropdown() {
    let data = ['C', 'C++', 'Java', 'AdvJava', 'WPT'];

    return (
        <div>
            <h2>Select Course</h2>

            <select>
                {data.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;