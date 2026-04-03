// 1) Create Counter Application with Function Component 
// Take 2 buttons Increment and Decrement

import { useState } from "react";   

export default function CounterFun() {

    let [cnt, setCnt] = useState(0);

    function btnHandler() {
        setCnt(cnt + 1);
    }
    function btnHandler1() {
        setCnt(cnt - 1);
    }
    return <>

        <h3> Count  {cnt}</h3>
        <button onClick={btnHandler} style={{}}>Increment </button>
        <button onClick={btnHandler1}>Decrement </button>
        {/*  // btn.btnHandler() */}
    </>
}


