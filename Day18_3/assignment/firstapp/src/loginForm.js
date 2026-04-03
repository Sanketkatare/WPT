//19-3-26 2) Create LoginForm using class component 
//     accept username and password 
//     and display
// 	 hello <username>  on same page 

// 	if username = "iet" and password = "iet"

import { Component } from "react";

export default class LoginPage extends Component {


    render() {
        function call(e) {
            console.log(e.target.value)
            return(document.getElementById("h3").innerHTML = "hellow  " + e.target.value)
        }

        return (


            <div>
                <h3>Login form</h3>
                <form>
                    <input id="User_name" placeholder="UserName" onBlur={call}></input>
                    <input id="Password" placeholder="Password"></input>
                    <button onClick={call}>Submit</button>
                    <h3 id="h3">

                    </h3>
                </form>
                
            </div>
            
        )

    }

}