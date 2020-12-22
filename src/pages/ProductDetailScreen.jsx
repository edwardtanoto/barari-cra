import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import ImageGallery from 'react-image-gallery';
import { kebabcase } from '../utils/kebabcase'
import shopee from '../images/shopee.png';
import tokped from '../images/tokopedia-seeklogo.com.svg'
import LazyLoad from 'react-lazyload'

import barari_biru from '../images/products/bb.jpg'
import bnt from '../images/products/bnt.jpg'
import mm from '../images/products/mm.jpg'
import bps from '../images/products/bps.jpg'
import mh from '../images/products/mh.jpg'

export const ProductDetailScreen = ({ match }) => {
    const productmatch = match.params.product;
    const { products } = useContext(GlobalContext);
    const product = products.filter(product => {
        return productmatch == kebabcase(product.title);
    })

    const images = [
        {
            original: product.map(product => product.gallery[0]),
            thumbnail: product.map(product => product.gallery[0]),
        },
        {
            original: product.map(product => product.gallery[1]),
            thumbnail: product.map(product => product.gallery[1]),
        },
        {
            original: product.map(product => product.gallery[2]),
            thumbnail: product.map(product => product.gallery[2]),
        },
    ];

    class MyGallery extends React.Component {
        render() {
            return <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} />;
        }
    }

    return (
        <div id="about">
            <div className="pt-5 container">
                {products ? product.map((product, index) => {
                    return (
                        <Row className="container">
                            <Col md={5}>
                                <LazyLoad height={200} true>
                                    <MyGallery />
                                </LazyLoad>
                            </Col>
                            <Col md={7} className="align-self-end mb-5 mt-5">
                                <div >
                                    <h5 className='text-capitalize'>{product.title}</h5>
                                    <p className='light-text'>{product.description}</p>
                                </div>
                                <div><h6>Shop Now</h6>
                                    <img width="36px" src={shopee} />
                                    <img width="36px" src={tokped} />
                                </div>
                                <div className="d-flex justify-content-end">
                                    <Link className="a" to="/products">&lt;&lt; Back</Link>
                                </div>
                            </Col>

                        </Row>
                    )
                }) : ''
                }

            </div>
        </div>
    )
}


