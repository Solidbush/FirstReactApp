import React from "react";
import navBarStyle from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={navBarStyle.navBar}>
            <div className={navBarStyle.item}>
                <NavLink to="/messages" className={props => props.isActive ? navBarStyle.active : null}>Messages</NavLink>
            </div>
            <div className={navBarStyle.item}>
                <NavLink to="/profile" className={props => props.isActive ? navBarStyle.active : null}>Profiles</NavLink>
            </div>
            <div className={navBarStyle.item}>
                <NavLink to="/news" className={props => props.isActive ? navBarStyle.active : null}>News</NavLink>
            </div>
            <div className={navBarStyle.item}>
                <NavLink to="/music" className={props => props.isActive ? navBarStyle.active : null}>Music</NavLink>
            </div>
            <div className={navBarStyle.item}>
                <NavLink to="/settings" className={props => props.isActive ? navBarStyle.active : null}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;