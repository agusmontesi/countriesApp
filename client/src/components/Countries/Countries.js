import React, {useEffect, useState} from "react"
import "./Countries.css"
import { connect, useDispatch } from "react-redux"
import {Link} from "react-router-dom"
import { getCountries } from "../../Actions/actions";


const Countries = (props) => {
    const [numeroPagina, setNumeroPagina] = useState(1);

	const grupo = 10;
	const conteoFinal = numeroPagina * grupo;
	const conteoInicial = conteoFinal - grupo;

	const paises = props.countries.slice(conteoInicial, conteoFinal)

	 useEffect(async ()=> {
	await props.getCountries("")
    
	},[])
    

    return (
        <div className="countries">
            <div className="contenedor">
                    { paises.map(c => 
                    <div key={c.id} className="Card">
                        <img src={c.flag} className="flag"></img>
                        <Link to ={`/home/${c.id}`} className="link" >{c.name}</Link>
                        <h3 className="continent">{c.continent}</h3>
                    </div>)}
                    <div className="paginationBtns">
					<button disabled={numeroPagina <= 1 }onClick={() =>
                         setNumeroPagina(numeroPagina - 1)}>backward</button>
			        <button>{numeroPagina}</button>
			        <button onClick={() => setNumeroPagina(numeroPagina + 1)}>forward</button>
		        </div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCountries: () => dispatch(getCountries())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries)