import { useContext } from "react"

import { ctx } from './index1'

export default function AboutUs(props) {

    let actx = useContext(ctx);
    let u = actx.username
    return <>

        <h1>About Us </h1>
        <h2>Hello {u}</h2>

    </>
}