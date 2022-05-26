import {SET_USER, SET_STORAGE, SET_LOADING, REMOVE_LOADING, SET_AUTH_ON, SET_AUTH_OFF, REMOVE_USER} from "./actions";
import {createContext, useContext, useReducer} from "react";
import reducer from "./reducer";
import axios from 'axios'


const initialState = {
    isLoading : false,
    user: JSON.parse(localStorage.getItem('user')) || null,
    token : localStorage.getItem('token') || null,
    isAuthenticated : false,
    error : {
        show : false,
        msg: ''
    }
}


const AppContext = createContext()


const AppProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState);


    const register = async (data) => {
        console.log(data);
        dispatch({type : SET_LOADING})
        try {
            const response = await axios.post('https://react-techquiz.test/api/register', data,{
                headers: {
                    Accept : 'application/json'
                }
            })
            console.log(response);
            dispatch({type : SET_USER, payload: response.data})
            dispatch({type : SET_AUTH_ON})
            localStorage.setItem('user' , JSON.stringify(response.data.user));
            localStorage.setItem('token' , response.data.token);
            dispatch({type : REMOVE_LOADING})
        }catch (error) {

        }

    }

    const login = async (data) => {
        console.log(data);
        dispatch({type : SET_LOADING})
        try {
            const response = await axios.post('https://react-techquiz.test/api/login', data,{
                headers: {
                    Accept : 'application/json'
                }
            })
            console.log(response);
            dispatch({type : SET_USER, payload: response.data})
            dispatch({type : SET_AUTH_ON})
            localStorage.setItem('user' , JSON.stringify(response.data.user));
            localStorage.setItem('token' , response.data.token);
            dispatch({type : REMOVE_LOADING})
        }catch (error) {

        }
    }

    const logout = () => {
        dispatch({type : REMOVE_USER})
        dispatch({type: SET_AUTH_OFF})
    }


    return <AppContext.Provider value={{...state,register,login,logout}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext,AppProvider}