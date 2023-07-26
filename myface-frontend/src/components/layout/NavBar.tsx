import { NavLink } from "react-router-dom"
import {useState} from "react"
import "./NavBar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"




function NavBar(){

    const [ navbarExpanded, setNavbarExpanded ] = useState(false)

    const toggleNavbar = () => {
        setNavbarExpanded(!navbarExpanded)
    }

    return (
    <>
    <FontAwesomeIcon  className="mobile-navbar-toggler" icon={faBars} onClick={()=>{ toggleNavbar()} } />

    <nav className={`navbar ${navbarExpanded ? "navbar--expanded" : ""}`}>
        <FontAwesomeIcon  className="mobile-navbar-toggler" icon={faXmark} onClick={ ()=>{ toggleNavbar()} } />

        <h3 className="navbar__title">MyFace</h3>
        <div className="navbar__pages">
            <NavLink onClick={ ()=>{ toggleNavbar()} } to="/"
                className={({ isActive}) =>
                    isActive ? "navbar-active" : ""
                } >Home</NavLink>
            <NavLink onClick={ ()=>{ toggleNavbar()} }  to="/posts"
                className={({ isActive}) =>
                    isActive ? "navbar-active" : ""
                } >Posts</NavLink>
            <NavLink  onClick={ ()=>{ toggleNavbar()} } to="/users"
                className={({ isActive}) =>
                    isActive ? "navbar-active" : ""
                } >Users</NavLink>
        </div>
        <NavLink  onClick={ ()=>{ toggleNavbar()} }  to="/posts/create"
                className={({ isActive}) => `navbar__create-post ${isActive ? "navbar-active" : ""}` } >+ New Post</NavLink>
    </nav>
    </>
    )

}

export default NavBar