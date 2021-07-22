import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getDetail} from "../../Actions/actions"
import {NavLink} from "react-router-dom"
import "./About.css"

const About = (props) => {
   
    useEffect(() => {
        const CountryId = props.match.params.id;
        props.getCountryDetail(CountryId)
    }, [])
    return(
        <div className="SuperContainer">
            <NavLink className="NavLink" to ="/home">Volver al home</NavLink>
        <div className="Container">
            <img className="Flag" src={props.countryDetail.flag} alt="No se pudo encontrar la img"></img>
            <h1 className="conj">{props.countryDetail.name}</h1>
            <h3 className="conj">{props.countryDetail.name}</h3>
            <h3 className="conj">Capital: {props.countryDetail.capital}</h3>
            <h3 className="conj">Continent: {props.countryDetail.continent}</h3>
            <h3 className="conj">Subregion: {props.countryDetail.subregion}</h3>
            <h3 className="conj">Area: {props.countryDetail.area}</h3>
            <h3 className="conj">Population: {props.countryDetail.population}</h3> 
            <h3 className="conj">Turist Activities:</h3>
            <div className="SUPERMILCONTAINER">
            {
            props.countryDetail.activities?.map(e => 
                <div className="InfoActivities">
                <h4 className="value">{e.name}</h4>
                <h4 className="value">Dificultad: {e.difficulty}</h4>
                <h4 className="value">Duracion: {e.duration}</h4>
                <h4 className="value">Temporada:{e.season}</h4>
                </div>
            )
          }
            </div>
            
        </div>
        </div>
 )

}


const mapStateToProps = (state) => {
    return {
      
        countryDetail : state.countryDetail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCountryDetail: id => dispatch(getDetail(id))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(About)