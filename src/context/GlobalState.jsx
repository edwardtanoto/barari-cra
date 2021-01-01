import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    language: "en"
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function changeLanguage(language) {
        dispatch({
            type: 'CHANGE_LANGUAGE',
            payload: language
        })
    }

    return (
        <GlobalContext.Provider value={{
            language: state.language,
            changeLanguage
        }}>
            {children}
        </GlobalContext.Provider>);

}