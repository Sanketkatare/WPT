import { useContext } from "react"

import { ctx } from './index1'
export default function Home(props) {
    let homeCtx = useContext(ctx);
    let username1 = homeCtx.username;
    return <><div style={{ textAlign: "center", maxWidth: "600px" }}>
        <h2 style={{ color: "#2c3e50" }}>Home Page</h2>
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            Welcome to the home page!
            <p>Hello Context {username1}</p>
        </p>
        {/*  <button onClick={() =>
                 n("/contact")}>Go to Contact</button> */}
    </div></>
}