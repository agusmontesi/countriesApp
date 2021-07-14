import {GET_COUNTRIES, GET_COUNTRY_DETAIL, GET_ACTIVITIES} from '../Actions/actions';

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
    return state
}

export default reducer
