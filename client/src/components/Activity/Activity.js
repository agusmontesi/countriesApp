import axios from "axios";
import React, { useState, useEffect } from "react"
import {NavLink} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import "./Activity.css"
import { getCountries, getActivities } from "../../Actions/actions";


export const Activity = () => {

    const dispatch = useDispatch()
    const countries = useSelector((state) => state.countries);

    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries:[]
    });
    
    const handleInputChange = (e) =>{
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }
    
    const handleInputCountries = (e) => {      
            setInput({
                ...input,            
                [e.target.name]:             
                [...input.countries,
                    e.target.value]
            })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
            await axios.post("http://localhost:3001/activities", input);
            setInput({
                name: "",
                difficulty: "",
                duration: "",
                season: "",
                countries: []
            })
    }

    useEffect(() => {
        dispatch(getCountries());
    }, []);

    const act = useSelector((state=>state.activities))

    return (
        <div className="ActivityContainer">
        <NavLink className="NavLink" to ="/home">Volver al Home</NavLink>
        <h2 className="Title">Crea una nueva ACTIVIDAD</h2>
        <div className="ContainerForm"></div>
        <form className="Form" onSubmit={handleSubmit}>
            <label className="label">Nombre</label>
            <input placeholder="Actividad" name="name" className="InputNombre" value={input.nombre} onChange={handleInputChange}></input>
            <label className="label">Dificultad</label>
            <input placeholder="1-5" name="difficulty" className="InputDificultad" value={input.dificultad} onChange={handleInputChange}></input>
            <label className="label">Duración</label>
            <input placeholder="Minutos" name="duration" className="InputDuracion" value={input.duracion} onChange={handleInputChange}></input>
            <label className="label">Temporada</label>
            <input placeholder="Temporada" name="season" className="InputTemporada" value={input.temporada} onChange={handleInputChange}></input>
            <label className>Paises</label>
            <select onChange={handleInputCountries} name="countries" multiple={true}>
                        {countries.map((country) => {
                            return (
                                <option key={country.id} value={country.id}>
                                   {country.name}
                                </option>
                            )
                        })}
                    </select>
            
            <input type="submit"  value="Ok!" onSubmit={(e) => {
               dispatch(getActivities(input))
                }}>
                </input>
                <button type="reset" onClick={() => setInput(
            {
             name: "",
             difficulty: "",
             duration: "",
             season: "",
             countries: []
        })}>Nueva Actividad</button>
        </form>
        </div>
    )
}

export default Activity