import { NavLink } from "react-router-dom"
import "./Landing.css"

const Landing = () => {
    return (
        <div className="LandingContainer">
            <h2 className="TextoLanding">Bienvenidos</h2>
            <NavLink to="/home" className="Nav">Explora!</NavLink>
        </div>
    )
}

export default Landing