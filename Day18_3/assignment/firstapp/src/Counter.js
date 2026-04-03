
// 1) With the concept of Class Component
//    Create Counter Application 

// Take 2 buttons Increment and Decrement 

import { Component } from "react";

export default class CounterClass extends Component {
    constructor(props) {
        super(props);
        //bind
        this.btnHandler = this.btnHandler.bind(this);
        this.btnHandler1 = this.btnHandler1.bind(this);
        this.i = this.props.num1; // instance 
        //this.cnt = 0;// instance 
        this.state = { cnt: 0 }// state variable 
        // react v Dom 
    }

    btnHandler() {
        this.i++;
        this.setState({ cnt: this.i });// 
    }
    btnHandler1() {
        this.i--;
        this.setState({ cnt: this.i });
    }
    render() {

        return <>

            <h3> Count  {this.state.cnt}</h3>
            <button onClick={this.btnHandler} style={{}}>Increment </button>
            <button onClick={this.btnHandler1}>Decrement </button>
            {/*  // btn.btnHandler() */}

        </>
    }
}