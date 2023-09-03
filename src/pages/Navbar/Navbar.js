import "./Navbar.css";
import Heading from "./Heading";

export default function Navbar() {
    return (
        <div className="navbar">
            
            <ul>
                

                <li><a href="#">Home</a></li>
                <li><a href="#">Practice</a></li>
                <li><a href="#">Roadmaps</a></li>
                <li><a href="#">Login</a></li>
                
            </ul>
            
            <Heading />
        </div>
    );
}