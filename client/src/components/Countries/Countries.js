import React from "react"
import "./Countries.css"
import { connect } from "react-redux"

const Countries = (props) => {
    return (
        <div className="CountriesContainer">
            <ul  className="InfoContainer" >
                {props.Countries.map(el => (
                    <div>
                        <h2>{el.name}</h2>
                        <img className="flag" src={el.flag}></img>
                    </div>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        Countries: state.countries
    }
}

export default connect(mapStateToProps)(Countries)