import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return <div className="header">
        <img className="headerlogo" src={LOGO_URL} />
        <ul className="navItems">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
    </div>
}

export default Header;