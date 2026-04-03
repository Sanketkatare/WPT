import { useState } from "react";


const funcSet = new Set();

const Callbackwithout = () => {
    const [cnt, setCnt] = useState(0);
    const [num, setNum] = useState(0);

    const incre = (() => setCnt((prev)=>prev+1));// to know the prev function that 1st component value is 1
    const decre = (()=> setCnt((prev) => prev - 1));// it will take the prrvious compnonent value so it will be 1
    const incNum = (()=> setNum((prev) => prev + 1));// it will be 

    funcSet.add(incre);
    funcSet.add(decre);
    funcSet.add(incNum);

    return(
        <div>
            <h3> Without Callback</h3>
            <button onClick={incre}>Increment</button>
            <button onClick={decre}>decrement</button>
            <button onClick={incNum}>number incre</button>
            <h1>count: {cnt}</h1>
            <h1>number : {num}</h1>
        </div>
    );

}

export default Callbackwithout;