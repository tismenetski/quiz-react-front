import {SET_LOADING, SET_USER, REMOVE_LOADING, SET_STORAGE, GET_STORAGE, SET_AUTH_ON,SET_AUTH_OFF,REMOVE_USER} from "./actions";

const reducer = (state,action) => {
    switch (action.type) {
        case SET_LOADING:
            return {...state, isLoading : true}
        case REMOVE_LOADING:
            return {...state, isLoading : false}
        case SET_USER:
            return {...state, user : action.payload.user, token : action.payload.token}
        case REMOVE_USER:
            return {...state, user : null, token : null}
        case SET_AUTH_ON:
            return {...state,isAuthenticated: true}
        case SET_AUTH_OFF:
            return {...state,isAuthenticated: false}
        default :
            throw new Error(`No matching action "${action.type}"`);
    }
}


export default reducer