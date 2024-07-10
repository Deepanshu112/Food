import { useState } from "react";
import {LOGO_URL} from "../utils/contains";
import { Link } from "react-router-dom";

const Header = () => {

    const[btnNameReact,setbtnNameReact] = useState("Sign In");

    return (
        <div className="header">
            <div className="logo-container">
            <Link to="/"><img className="logo" src={LOGO_URL} /></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        Cart
                    </li>
                    <button 
                        className="login"
                        onClick={() => {
                            btnNameReact === "Sign In"
                             ? setbtnNameReact("Sign Out")
                             : setbtnNameReact("Sign In");
                            ;
                        }}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;