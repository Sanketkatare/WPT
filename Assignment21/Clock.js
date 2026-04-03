import React, { useState, useEffect } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    let hours = time.getHours();
    let isAM = hours < 12;

    const style = {
        height: "100vh",
        backgroundColor: isAM ? "lightyellow" : "lightblue",
        textAlign: "center",
        paddingTop: "50px"
    };

    return (
        <div style={style}>
            <h2>{time.toLocaleTimeString()}</h2>
            <h3>{isAM ? "AM" : "PM"}</h3>
        </div>
    );
}

export default Clock;