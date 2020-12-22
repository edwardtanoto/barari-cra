import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

/* PUT THUMBNAIL IMAGES HERE */
import barari_select from '../images/products/bs1.jpg'
import barari_biru from '../images/products/bb.jpg'
import bnt from '../images/products/bnt.jpg'
import mm from '../images/products/mm.jpg'
import bps from '../images/products/bps.jpg'
import mh from '../images/products/mh.jpg'

/* GALLERY IMAGES HERE */

// Barari Curah Madu
import bb2 from '../images/bb/bb2.jpg'
import bb3 from '../images/bb/bb3.jpg'
import bb4 from '../images/bb/bb4.jpg'

// Barari Medjool Merah
import mm2 from '../images/mm/mm2.jpg'
import mm3 from '../images/mm/mm3.jpg'
import mm4 from '../images/mm/mm4.jpg'

// Barari Medjool Ijo Date
import mh2 from '../images/mh/mh2.jpg'
import mh3 from '../images/mh/mh3.jpg'
import mh4 from '../images/mh/mh4.jpg'

// Barari Premium Sukari
import bps2 from '../images/bps/bps2.jpg'
import bps3 from '../images/bps/bps3.jpg'
import bps4 from '../images/bps/bps4.jpg'

// Barari Tangkai
import bt2 from '../images/bt/bt2.jpg'
import bt3 from '../images/bt/bt3.jpg'
import bt4 from '../images/bt/bt4.jpg'

// Barari Selected
import bs2 from '../images/bs/bs2.jpg'
import bs3 from '../images/bs/bs3.jpg'
import bs4 from '../images/bs/bs4.jpg'

const initialState = {
    products: [
        {
            "title": "Barari Curah Madu",
            "subtitle": "Algerian Deglet Nour",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto non eaque ut. Provident id numquam dolorem sed reiciendis quaerat doloribus quisquam odit praesentium, unde iste quos officiis deserunt asperiores. Totam!",
            "image": barari_biru,
            "gallery": [
                bb2, bb3, bb4
            ]
        },
        {
            "title": "Barari Kurma Medjool",
            "subtitle": "Tunisian Medjool Dates",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto non eaque ut. Provident id numquam dolorem sed reiciendis quaerat doloribus quisquam odit praesentium, unde iste quos officiis deserunt asperiores. Totam!",
            "image": mm,
            "gallery": [
                mm2, mm3, mm4
            ]
        },
        {
            "title": "Barari Medjoul Dates ",
            "subtitle": "Iraq Medjool Dates",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto non eaque ut. Provident id numquam dolorem sed reiciendis quaerat doloribus quisquam odit praesentium, unde iste quos officiis deserunt asperiores. Totam!",
            "image": mh,
            "gallery": [
                mh2, mh3, mh4
            ]
        },
        {
            "title": "Barari Kurma Sukari Premium",
            "subtitle": "Saudi Dates",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto non eaque ut. Provident id numquam dolorem sed reiciendis quaerat doloribus quisquam odit praesentium, unde iste quos officiis deserunt asperiores. Totam!",
            "image": bps,
            "gallery": [
                bps2, bps3, bps4
            ]
        },
        {
            "title": "Barari Kurma Tunisia Curah",
            "subtitle": "Tunisian Dates",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto non eaque ut. Provident id numquam dolorem sed reiciendis quaerat doloribus quisquam odit praesentium, unde iste quos officiis deserunt asperiores. Totam!",
            "image": bnt,
            "gallery": [
                bt2, bt3, bt4
            ]
        },
        {
            "title": "Barari Batik Kurma Tangkai Madu Algeria",
            "subtitle": "Algerian Dates",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto non eaque ut. Provident id numquam dolorem sed reiciendis quaerat doloribus quisquam odit praesentium, unde iste quos officiis deserunt asperiores. Totam!",
            "image": barari_select,
            "gallery": [
                bs2, bs3, bs4
            ]
        },
    ],
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state] = useReducer(AppReducer, initialState)
    return (
        <GlobalContext.Provider value={{
            products: state.products,
        }}>
            {children}
        </GlobalContext.Provider>);

}