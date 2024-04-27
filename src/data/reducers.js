import { combineReducers } from "redux"


const filmsReducer = (state = {
    loading: false,
    data: null,
    error: null
}, action) => {
    switch(action.type) {
        case "FETCH_DATA_REQUEST":
            return {loading: true, data: null, error: null};
        case "FETCH_DATA_SUCCESS":
            return { loading: false, data: action.payload, error: null}
        case "FETCH_DATA_FAILED":
            return { loading: false, data: null, error: true}
        default:
            return state
    }
}

const rootReducers = combineReducers({
    films: filmsReducer
})

export default rootReducers