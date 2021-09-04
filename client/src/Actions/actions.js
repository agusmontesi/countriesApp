import axios from "axios"
export const GET_COUNTRIES  = 'GET_COUNTRIES';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const ASC = 'Razas-A-Z';
export const DES = 'Razas-Z-A';
export const HASD = 'HABITANTES_ASD';
export const HDES = 'HABITANTES_DES';
export const SORT_PAISES ='SORT_PAISES'
export const SORT_HAB ='SORT_HAB'
export const FILTER_CONT = "FILTER_CONT"
export const FETCH_ACTIVITIES = "FETCH_ACTIVITIES"
export const CHANGE_ACTIVITIES = "CHANGE_ACTIVITIES"


export const getCountries = (name) => {
    return function (dispatch) {
        if (name) {
            axios.get(`http://localhost:3001/countries?name=${name}`)
            .then(response => {
                dispatch({type: GET_COUNTRIES, payload: response.data})
            })
        } else {
            axios.get(`http://localhost:3001/countries`)
            .then(response => {
                dispatch({type: GET_COUNTRIES, payload: response.data})
            })
        }
    }
}


export const getDetail = (id) => {
    return function (dispatch) {
        axios.get(`http://localhost:3001/countries/${id}`)
        .then(response => {
            dispatch({type: GET_COUNTRY_DETAIL, payload: response.data})
        })
    }
}

export const getActivities = () => {
    return function (dispatch){
        axios.get("http://localhost:3001/activity")
        .then(response => {
            dispatch({type: GET_ACTIVITIES, payload: response.data})
        })
    }
}

export function sort(orden, opaises){
	let paises = [...opaises]

	paises.sort((a,b) => {

  		var nombreA = a.name.toUpperCase()
  		var nombreB = b.name.toUpperCase()


		if(orden === ASC){
            if(nombreA < nombreB){
                return -1;
            }
            if(nombreA > nombreB){
                return 1
            }
            return 0
        }
        if(orden === DES){
            if(nombreA < nombreB){
                return 1;
            }
            if(nombreA > nombreB){
                return -1
            }
            return 0
        }
	})
	return function(dispatch){
        dispatch({type: SORT_PAISES, payload: paises})
    }
}


export function sortHabitantes(orden, oHabitantes){
	let habitantes = [...oHabitantes]

	habitantes.sort(function(a,b){

		var poblacionA = parseFloat(a.population)
        var poblacionB = parseFloat(b.population)

		if(orden === HASD){
            if(poblacionA < poblacionB){
                return -1;
            }
            if(poblacionA > poblacionB){
                return 1
            }
            return 0
        }
        if(orden === HDES){
            if(poblacionA < poblacionB){
                return 1;
            }
            if(poblacionA > poblacionB){
                return -1
            }
            return 0
        }
	})
	        return function(dispatch){
            dispatch({type: SORT_HAB, payload: habitantes})
    }
}

export function filterCont (value) {
     return function (dispatch){
         dispatch({type:FILTER_CONT, payload: value})
     }
    }

//Esta action me postea los results del form
export const FetchActivities = () => {
    return function (dispatch) {
        axios.get(`http://localhost:3001/activities`)
        .then(response => {
            console.log(response.data)
            dispatch({type: FETCH_ACTIVITIES, payload: response.data})
        })
    }
}

export function changeActivities(actividad){
    console.log(actividad)
	return function(dispatch){
		 axios.get(`http://localhost:3001/countries?activity=${actividad}`)
		.then(response => {
			dispatch({type: CHANGE_ACTIVITIES, payload: response.data})
		})
	}
}




