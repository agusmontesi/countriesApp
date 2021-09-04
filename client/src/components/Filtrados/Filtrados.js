import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import {filterCont,getCountries, changeActivities, FetchActivities } from "../../Actions/actions"
import "./Filtrados.css"



const Filtrados = () => {
const dispatch = useDispatch();

const actividades= useSelector((state) => state.activities)
console.log(actividades)


    function handleSelectAct(e) {
        e.preventDefault();
        dispatch(changeActivities(e.target.value))
  }

    function handleContinente (e) {
        e.preventDefault()
        dispatch(filterCont(e.target.value))
    }


    useEffect(() => {
        dispatch(FetchActivities());
         dispatch(getCountries());
    }, [])

    return (
        <div className="FiltradosContainer">
            <select className="filtroActividades" name="actividades" onChange={(e) => handleSelectAct(e)}>
	  			<option value="">Filtrar por Actividad Turistica</option>
	  			{actividades && actividades.map(s => (
	  			<option value={s.name}>
                      {s.name}
                </option>
	  			))}
  			</select>
            
        
            <select className="SelectContinent" name="continent" onChange={handleContinente}>
			    <option value="">Filtrar por continente</option>
			    <option value="Europe">Europa</option>
			    <option value="Americas">America</option>
			    <option value="Asia">Asia</option>
			    <option value="Oceania">Oceania</option>
			    <option value="Africa">Africa</option>
			    <option value="Polar">Polar</option>
		    </select>
        </div>
    )
} 



export default Filtrados