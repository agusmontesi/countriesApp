import React, {useEffect} from "react";
import {useDispatch, connect} from "react-redux"
import {filterCont,getCountries, changeActivities, FetchActivities } from "../../Actions/actions"
import "./Filtrados.css"



const Filtrados = (props) => {
const dispatch = useDispatch();

    function handleSelectAct(e) {
        e.preventDefault();
        console.log(e.target.value)
        dispatch(changeActivities(e.target.value))
  }

    function handleContinente (e) {
        e.preventDefault()
        dispatch(filterCont(e.target.value))
    }
    useEffect(async() => {
        await dispatch(FetchActivities());
        await dispatch(getCountries());
    }, [])
    return (
        <div className="FiltradosContainer">
            <select name="Actividades" className="SelectStation" onChange={handleSelectAct}>
                <option value="">Select Station:</option>
                <option value="Winter">Winter</option>
                <option value="Summer">Summer</option>
                <option value="Spring">Spring</option>
                <option value="Autumn">Autumn</option>
            </select>
            
            
            <select className="SelectContinent" name="continent" onChange={handleContinente}>
			    <option value="">Filter by Continent</option>
                <option value="All">All</option>
			    <option value="Europe">Europe</option>
			    <option value="Americas">Americas</option>
			    <option value="Asia">Asia</option>
			    <option value="Oceania">Oceania</option>
			    <option value="Africa">Africa</option>
			    <option value="Polar">Polar</option>
		    </select>
        </div>
    )
} 



export default Filtrados