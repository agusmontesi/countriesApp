import {GET_COUNTRIES, GET_COUNTRY_DETAIL, GET_ACTIVITIES, SORT_PAISES, SORT_HAB, FILTER_CONT, FETCH_ACTIVITIES, CHANGE_ACTIVITIES} from '../Actions/actions';

const initialState = {
    countries: [],
    countryDetail: [],
    activities: []
}

const reducer = (state = initialState, action) => {
if(action.type === GET_COUNTRIES){
    return {
        ...state, 
        countries: action.payload
    }
} 
if(action.type === GET_COUNTRY_DETAIL){
    return {
        ...state, 
        countryDetail: action.payload
    }
}
if(action.type === GET_ACTIVITIES){
    return {
        ...state, 
        activities: action.payload
    }
}
if (action.type === SORT_PAISES){
    return{
        ...state,
        countries: action.payload
    }
}
if (action.type === SORT_HAB){
    return{
        ...state,
        countries: action.payload
    }
}
if (action.type === FILTER_CONT){
    return{
        ...state,
        countries: state.countries.filter(el => el.continent === action.payload)
    }
}
if (action.type === FETCH_ACTIVITIES){
    return{
        ...state,
        activities: action.payload
    }
}
if (action.type === CHANGE_ACTIVITIES){
    return{
        ...state,
        countries: action.payload
    }
}


    return state
}

export default reducer
