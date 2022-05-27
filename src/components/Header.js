import React from "react"
import {GiWorld} from "react-icons/gi" 
import "../styles.css"

function Header() {
    return (
        <header className="header_container">
            <GiWorld />
            <p>my travel journal.</p>
        </header>
    )
}

export default Header