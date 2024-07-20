import { useContext, useState } from "react";
import {LOGO_URL} from "../utils/contains";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const[btnNameReact,setbtnNameReact] = useState("Sign In");

    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);
    // console.log(loggedInUser);

    // Subscribing to the store without using the selector
    const cartItems = useSelector((store) => store.cart.items);

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
                        <Link to="/cart">Cart ({cartItems.length})</Link>
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
                    {/* <li>{loggedInUser}</li> */}
                </ul>
            </div>
        </div>
    )
}

export default Header;