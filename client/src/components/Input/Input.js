import React, { useState } from 'react';
import './Input.css';
import { connect } from 'react-redux';
import { getCountries } from '../../Actions/actions'

export function Input(props) {
	const [input, setInput] = useState({
		pais: "",
	})

	function handleChange(e){
    setInput({
    	pais: e.target.value
    })};

    function handleSubmit(e){
    	e.preventDefault()

    if (input.pais) {
      props.getCountries(input.pais)
    }
    else {
      alert("You must enter a valid country name!")
    }


  }

	return(
	<div className="cnt">
		<form onSubmit={(e) => handleSubmit(e)}>
		<input
		className="input"
		type="text"
		placeholder="Search Country..."
		name="pais"
		value={input.pais}
		onChange={(e) => handleChange(e)}

		/>
		<button type="submit" className="btns">Search</button>
		</form>
	</div>
	)
}

function mapStateToProps(state) {
  return {
    	countries: state.countries
	}
}

function mapDispatchToProps(dispatch) {
  return {
    getCountries: nombre => dispatch(getCountries(nombre))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Input)