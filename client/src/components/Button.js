import React from "react";
import "../../css/button.css";

export default function Button({ txt, bgColor, txtColor, handleClick }) {
    return (
        <div
            id="button"
            style={{ background: bgColor, color: txtColor }}
            onClick={handleClick}
        >
            {txt}
        </div>
    );
}
