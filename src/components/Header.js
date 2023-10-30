import { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    let [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="header">
            <h1 className="logo">Khaosa</h1>
            <ul className="nav-items">
                <li> <Link to="/">Home</Link> </li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/">Cart</Link></li>
            </ul>
            {
                (isLoggedIn === false) ? <button onClick={() => { setIsLoggedIn(true) }}>Login</button> : <button onClick={() => { setIsLoggedIn(false) }}>Logout</button>
            }
           
        </div>
    )
}
export default Header;