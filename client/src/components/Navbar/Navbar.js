import React from "react"
import Input from "../Input/Input"
import { NavLink } from "react-router-dom"
import "./Navbar.css"


const Navbar = () => {
    return (
        <div className="NavbarContainer">
            <h2 className="title">Countries App</h2>
            <NavLink className="NavLink" to ="/activity">Crear nueva actividad</NavLink>
            <Input />
        </div>
    )
}


export default Navbar