import React from 'react'
import { Product } from '../components/Product'

export const ProductsScreen = ({ match, history }) => {
    return (
        <div>
            <section className="wallpaper-product"></section>
            <div id="about">
                <Product history={history} />
            </div>

        </div>
    )
}
