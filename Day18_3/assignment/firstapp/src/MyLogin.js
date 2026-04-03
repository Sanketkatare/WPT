import { useState } from "react";

import Index from './index1'



export default function MyLogin() {

    let [username, setUser] = useState('Default'); // state variable 
    let [password, setPass] = useState('Default');// it will set the value to the vairiable and setPass is the element name 
    let [showComp, setVisible] = useState(false);
    function textReceiver1(e) {// for taking the username 
        console.log(e.target.value)
        setUser(e.target.value)
        
    }
    function textReceiver2(e){//for taking the password 
        console.log(e.target.value);
        setPass(e.target.value);
    }

    function validate(e) {
        // alert("in validate")

        if (username == 'Sanket@123' && password == 'Sanket') {
            // alert("Valid User")
            setVisible(true);
        } else {
            alert("Invalid User")
        }
        e.preventDefault();// prevent  Form Submit
    }




    return <>
        {/* onBlur={ }    readonly  

        //Controlled Comp input ==  state variable */}
        <div>
{/*Index user={username} is used due to in the index we are using props 
so we have to pass the props value so from Mylogin file we are passing
the value of the username  and the showComp its a variable which is 
false at initial stage so '?' it willcheck the condition and if true then
next stpe will be process*/}

            {showComp ? (<Index user={username}></Index>) : (
                <form onSubmit={validate} action="">
                    Enter User Name <input type="text" name="username"
                        onChange={textReceiver1}
                        value={username}

                    />
                    <input type="text" name="password" onChange={textReceiver2} value={password}></input>
                    <input type="submit" value={'Login'} />
                </form>
            )
            }

        </div>
    </>
}