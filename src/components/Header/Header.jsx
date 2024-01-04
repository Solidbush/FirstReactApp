import React from "react";
import headerStyle from "./Header.module.css";

const Header = () => {
    return (
        <header className={headerStyle.header}>
            <img src="https://img.freepik.com/free-photo/landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise_335224-794.jpg?size=626&ext=jpg" alt="Лого сайта"/>
        </header>
    );
}

export default Header;