import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav id="navbar">
            <NavLink to="/">Hello World</NavLink>
            <NavLink to="/lesson2">Props & children</NavLink>
        </nav>
    );
}

export default Navbar;
