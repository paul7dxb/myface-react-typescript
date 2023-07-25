import { NavLink } from "react-router-dom"
import "./NavBar.css"


function NavBar(){
    return <nav>
        <NavLink   to="/"
            className={({ isActive}) =>
                isActive ? "navbar-active" : ""
            } >Home</NavLink>
        <NavLink   to="/posts"
            className={({ isActive}) =>
                isActive ? "navbar-active" : ""
            } >Posts</NavLink>
        <NavLink   to="/users"
            className={({ isActive}) =>
                isActive ? "navbar-active" : ""
            } >Users</NavLink>
    </nav>

}

export default NavBar