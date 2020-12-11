import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

/* PUT THUMBNAIL IMAGES HERE */
import test from '../images/products/Barari Select 1.jpg'


/* GALLERY IMAGES HERE */

const initialState = {
    products: [
        {
            "title": "Barari Biru",
            "subtitle": "Algerian Deglet Nour",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto non eaque ut. Provident id numquam dolorem sed reiciendis quaerat doloribus quisquam odit praesentium, unde iste quos officiis deserunt asperiores. Totam!",
            "image": test,
        },
        {
            "title": "Medjool Merah",
            "subtitle": "Tunisian Medjool Dates",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto non eaque ut. Provident id numquam dolorem sed reiciendis quaerat doloribus quisquam odit praesentium, unde iste quos officiis deserunt asperiores. Totam!",
            "image": test,
        },
        {
            "title": "Medjool Hijau",
            "subtitle": "Iraq Medjool Dates",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto non eaque ut. Provident id numquam dolorem sed reiciendis quaerat doloribus quisquam odit praesentium, unde iste quos officiis deserunt asperiores. Totam!",
            "image": test,
        },
        {
            "title": "Premium Sukkari",
            "subtitle": "Saudi Dates",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto non eaque ut. Provident id numquam dolorem sed reiciendis quaerat doloribus quisquam odit praesentium, unde iste quos officiis deserunt asperiores. Totam!",
            "image": test,
        },
        {
            "title": "Barari Hijau",
            "subtitle": "Tunisian Dates",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto non eaque ut. Provident id numquam dolorem sed reiciendis quaerat doloribus quisquam odit praesentium, unde iste quos officiis deserunt asperiores. Totam!",
            "image": test,
        },
        {
            "title": "Barari Selected",
            "subtitle": "Algerian Dates",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto non eaque ut. Provident id numquam dolorem sed reiciendis quaerat doloribus quisquam odit praesentium, unde iste quos officiis deserunt asperiores. Totam!",
            "image": test,
        },
    ],
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    return (
        <GlobalContext.Provider value={{
            products: state.products,
        }}>
            {children}
        </GlobalContext.Provider>);

}