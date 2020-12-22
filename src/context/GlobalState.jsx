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
            "description": "Kurma Madu berasal dari Algeria, yang rasanya legit sekali. Jenis kurma ini banyak ditanam di Algeria dan Tunisia, sehingga dikenal dengan nama kurma Tunisia atau bisa disebut 'deglet noor'. Berbeda dengan jenis lainnya, Tunisia memiliki warna cokelat yang lebih cerah dari kurma lainnya. Daging buahnya agak kering dengan tekstur sedikit renyah.",
            "image": barari_biru,
            "gallery": [
                bb2, bb3, bb4
            ]
        },
        {
            "title": "Barari Kurma Medjool",
            "subtitle": "Tunisian Medjool Dates",
            "description": "Kurma dari California (AS) ini sedikit mencuri perhatian. Sebab ukurannya jauh berbeda dari jenis yang lain. Kurma Medjool tersebut berdaging tebal dengan biji kecil, mempunyai panjang seukuran ibu jari orang dewasa. kurma medjool buahnya berukuran besar, daging tebal, dan enak rasanya. Karenanya buah kurma medjool disebut king of date palm, artinya rajanya kurma. Warna kurma ini aslinya adalah coklat kehitam-hitaman, namun warna coklat muda yang ada pada kurma, bukan karena kurma ini lama, namun merupakan proses kristalisasi dari gula kurma itu sendiri karena semua kurma pasti mengandung gula.",
            "image": mm,
            "gallery": [
                mm2, mm3, mm4
            ]
        },
        {
            "title": "Barari Medjoul Dates ",
            "subtitle": "Iraq Medjool Dates",
            "description": "Salah satu kurma Medjoul/Medjool keluaran timur tengah, yang jadi salah satu peng-ekspor kurma terbesar di dunia. Asal usul pertama kurma Medjoul ini sebenernya datangnya dari Mesir bukan Amerika, Kurma Medjool/Medjoul di juluki Raja segara kurma karena bentuknya yang besar. Dianggap sebagai berlian kurma, mereka dihargai karena ukurannya yang besar, rasa manis yang luar biasa dan tekstur kenyal.",
            "image": mh,
            "gallery": [
                mh2, mh3, mh4
            ]
        },
        {
            "title": "Barari Kurma Sukari Premium",
            "subtitle": "Saudi Dates",
            "description": "Kurma Raja dan Ratu dari Saudi Arabia, Warna dagingnya cokelat muda mirip karamel, kurmanya bulat dan cenderung gemuk. Dagingnya lembut dan lumer waktu dimakan, sangat terasa rasa karamelnya. Selain itu, kurma sukari adalah salah satu jenis kurma yang digemari oleh para raja di Timur Tengah. Kurma ini favorit banget mungkin karena dagingnya kurmanya yang besar besar, dan rasanya juga lembut.",
            "image": bps,
            "gallery": [
                bps2, bps3, bps4
            ]
        },
        {
            "title": "Barari Kurma Tunisia Curah",
            "subtitle": "Tunisian Dates",
            "description": "Kurma Tunisia memang sudah terkenal karena rasanya yang memang tidak biasa, punya cita rasa tersendiri. Kurma inilah yang dikenal dengan nama 'deglet noor' yang banyak ditanam di Algeria dan Tunisia. Dibandingkan dengan kurma jenis lain, kurma ini warnanya lebih cokelat terang. Bagian kulit luarnya kenang dan kering. Sedangkan bagian dalamnya juga agak kering, tidak lembek atau lembap berlebihan.",
            "image": bnt,
            "gallery": [
                bt2, bt3, bt4
            ]
        },
        {
            "title": "Barari Batik Kurma Tangkai Madu Algeria",
            "subtitle": "Algerian Dates",
            "description": "Kurma Algeria dengan rasa kenyal dan legit. Kurma Madu berasal dari Algeria, yang rasanya legit sekali. Varian kurma Tunisia memang dikenal unggul. Produknya yang paling terkenal adalah deglet noor. Julukannya mentereng: queen of all dates, alias ratu dari segala jenis kurma. Teksturnya halus, tak seperti kurma lain yang kering dan keriput. Warna kulit cokelat muda dan rasa yang manis seperti madu. Jenis kurma ini banyak dibudidayakan di Algeria dan Tunisia.",
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