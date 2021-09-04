import React from "react";
import {connect} from "react-redux";
import {sort, sortHabitantes , ASC, DES, HASD, HDES} from '../../Actions/actions';
import "./Ordenamientos.css"

const Ordenamientos = (props) => {
    function handleOrdenamiento(e) {
        if (e.target.value === ASC || e.target.value === DES) {
                  props.sort(e.target.value, props.countries)
            } 
          }
    function handleHabitantesOrdenamiento (e) {
        if(e.target.value === HASD || e.target.value === HDES) {
            props.sortHabitantes(e.target.value, props.countries)
        }
    }
    return (
        <div className="ContainerOrdenamientos">
            <select className="SelectOrdenamiento" onChange={handleOrdenamiento}>
                <option value="">Orden:</option>
                <option value={ASC}>Ascendente</option>
                <option value={DES}>Descendente</option>
            </select>
            <select className="SelectHabitantes" onChange={handleHabitantesOrdenamiento}>
                <option value={HASD}>Menor Poblacion</option>
                <option value={HDES}>Mayor Poblacion</option>
            </select>
        </div>
    )
}

function mapStateToProps(state){
	return {
		countries: state.countries
	}
}

function mapDispatchToProps(dispatch){
	return {
		sort: (a, b) => dispatch(sort(a, b)),
        sortHabitantes: (a,b) => dispatch(sortHabitantes(a,b))
	}}


export default connect(mapStateToProps, mapDispatchToProps)(Ordenamientos)