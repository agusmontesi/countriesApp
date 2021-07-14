import axios from "axios"
export const GET_COUNTRIES  = 'GET_COUNTRIES';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';

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