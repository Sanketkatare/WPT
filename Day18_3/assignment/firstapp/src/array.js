// 2) Declare variable which contains array Data 

// let data  = ['C' , 'C++' , 'Java' , 'AdvJava' , 'WPT']

// display above variable data in Dropdown format 
//  on html page withot= using map function  

import { Component } from "react";

export default class Array extends Component {  
    render() {
        let data = ['C', 'C++', 'Java', 'AdvJava', 'WPT']
        return (
            <div>
                <h3>Dropdown List</h3>
                <select>
                    <option>{data[0]}</option>
                    <option>{data[1]}</option>
                    <option>{data[2]}</option>
                    <option>{data[3]}</option>
                    <option>{data[4]}</option>
                </select>
            </div>
        )
    }
}


