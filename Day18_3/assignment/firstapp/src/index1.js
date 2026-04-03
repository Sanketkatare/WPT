import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Contact from './contact';




import { createContext } from 'react';
export let ctx = '';

export default function Index(props) {

    ctx = createContext();// context
    return <>
        <ctx.Provider value={{ username: props.user }}>


            {/*  <h1>index.js</h1>
        <h2>Data {props.user}</h2> */}

            <BrowserRouter>
{/* Routes we are using when we are having multiple components 
and wanted to use that one by one like pages 
Route : having 2 attributes path and element in the path we will 
provide the path of the file and in the element we pass the components*/}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>




                <nav
                    style={{
                        backgroundColor: "blue",
                        padding: "10px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >

{/*ul we are adding the list of the pages  */}
                    <ul style={{
                        listStyle: "none",
                        display: "flex",
                        gap: "20px",
                        padding: "0",
                        margin: "0",
                    }}>
                        <li>
                            <NavLink to="/" style={linkStyle}>
                                Home
                            </NavLink>
                        </li>
                        <li>{/* <a href="">About Us </a> */}
                            {/*  <Link to={path route}>About</Link> */}
                            <Link to="/about" style={linkStyle}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" style={linkStyle}>
                                Contact Us
                            </Link>
                        </li>

                    </ul></nav>
            </BrowserRouter>
        </ctx.Provider>


    </>




}

const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
};



// we have installed the "npm install react-router-dom" for using the functions like BrowserRouter, Route, Routes, NavLink, Link