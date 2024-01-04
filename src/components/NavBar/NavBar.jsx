import React from "react";
import navBarStyle from "./NavBar.module.css";

const NavBar = () => {
    return (
        <nav className={navBarStyle.navBar}>
            <div className={navBarStyle.item}>
                <a href="">Messages</a>
            </div>
            <div className={navBarStyle.item}>
                <a href="">Profiles</a>
            </div>
            <div className={navBarStyle.item}>
                <a href="">News</a>
            </div>
            <div className={navBarStyle.item}>
                <a href="">Music</a>
            </div>
            <div className={navBarStyle.item}>
                <a href="">Settings</a>
            </div>
        </nav>
    );
}

export default NavBar;