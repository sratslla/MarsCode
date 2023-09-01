import React from "react";
import "./Navbar.css"
import morselogo from "../../Assets/logo2.png"
import {useNavigate} from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()
    const loginRoute = () => {
        navigate(`/login`)
    } 
    return(
        <div className="navbar-body"> 
            <header>
                <a href="#" className="logo">
                    <img className="logo_icon" src={morselogo}/>
                    Morse-Code
                </a>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Practice</a></li>
                    <li><a href="#">Roadmaps</a></li>
                    <li><a onclick = {loginRoute}>Login</a></li>
                </ul>
            </header>
        </div>
    )
}
export default Navbar