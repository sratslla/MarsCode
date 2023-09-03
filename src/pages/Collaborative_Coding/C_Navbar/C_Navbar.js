import "./C_Navbar.css";
import C_Heading from "./C_Heading";

export default function C_Navbar() {
    return (
        <div className="navbar">
            
            <ul>
                

                <li><a href="#">Home</a></li>
                <li><a href="#">Practice</a></li>
                <li><a href="#">Roadmaps</a></li>
                <li><a href="#">Login</a></li>
                
            </ul>
            
            <C_Heading />
        </div>
    );
}