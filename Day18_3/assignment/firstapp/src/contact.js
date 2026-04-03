import { createRef, useState } from "react";


export default function Contact(props) {

    let n = 100;  //  simple 

    let n2 = createRef(101);  //Object  Ref Variable 
    let [n1, setN1] = useState(100);  // state   render 
    console.log(n2.prev);
    return <>
        <h1>Contact Page </h1>
        <h2>Email </h2>
        <h2>Hello {props.user}</h2>
        <h2>{n2.current}</h2>
        <h2>{n2.prev}</h2>

    </>
    
}