import React from "react";
import { useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

import { Link } from "react-router-dom";
import Button from "./Button";
import "../../css/navbar.css";

export default function NavBar() {
    const [search, setSearch] = useState("");
    const [menu, setMenu] = useState(false);
    const { width } = useWindowDimensions();

    const links = (
        <>
            <Link to="/">Startseite</Link>
            <Link to="/workinprogress">Gruppen</Link>
            <Link to="/workinprogress">Blog</Link>
            <Link to="/workinprogress">Preisübersicht</Link>
            <Link to="/about">Uber uns</Link>
        </>
    );
    const functions = (
        <>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Gruppe suchen"
            />

            <Button
                txt="Anmelden"
                bgColor="0,0,0,0"
                txtColor="0,0,0"
                handleClick={() => alert("Sign In request")}
            />
            <Button
                txt="Anmelden"
                bgColor="#A64D79"
                txtColor="#FCFCFC"
                handleClick={() => alert("Sign In request")}
            />
        </>
    );

    return (
        <nav id="navBar">
            {width >= 900 ? <div id="links">{links}</div> : null}
            <img src="img_resources/logo.png" className="logo" />
            {width >= 900 ? <div id="functions">{functions}</div> : null}
            {width < 900 ? (
                <>
                    {menu && (
                        <div
                            className="modalBackground"
                            onClick={() => setMenu(!menu)}
                        ></div>
                    )}
                    <div id="menu" style={{ width: menu ? "20%" : "0%" }}>
                        {(functions, links)}
                    </div>

                    <img
                        id="menuIcon"
                        src="img_resources/menu_icon.png"
                        onClick={() => setMenu(!menu)}
                        className={menu ? "on" : "off"}
                    />
                </>
            ) : null}
        </nav>
    );
}
