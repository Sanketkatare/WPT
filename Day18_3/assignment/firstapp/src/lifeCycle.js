// 3) Write a code to understand lifecycle of class component 
import { Component } from "react";

export default class LifeCycle extends Component() {

    constructor() {

        super();
        console.log("constructor")
    }


    /*  getDerivedStatefromProps() {

        console.log("getDerivedStatefromProps")
    }

 */
    componentDidMount() {
        console.log("componentDidMount")

    }

    getSnapshotBeforeUpdate() {


    }
    render() {

        console.log("render")
        return <>
            <h1></h1>
        </>
    }
}