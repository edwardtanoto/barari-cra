import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { Product } from '../components/Product'
import ImageGallery from 'react-image-gallery';
import { kebabcase } from '../utils/kebabcase'
import shopee from '../images/shopee-seeklogo.com.svg'
import tokped from '../images/tokopedia-seeklogo.com.svg'

export const ProductDetailScreen = ({ match }) => {
    const productmatch = match.params.product;
    const { products } = useContext(GlobalContext);

    return (
        <div id="about">
            <div className="pt-5 container">
                {products ? products.filter(product => {
                    return productmatch == kebabcase(product.title);
                }).map((product, index) => {
                    return (
                        <Row className="container">
                            <Col md={5}>
                                <MyGallery />
                            </Col>
                            <Col md={7} className="align-self-end mb-5 mt-5">
                                <div >
                                    <h5 className='text-capitalize'>{product.title}</h5>
                                    <p className='light-text'>{product.description}</p>
                                </div>
                                <div><h6>Shop Now</h6>
                                    <img width="36px" src={tokped} />
                                    <img width="36px" src={shopee} />
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

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

class MyGallery extends React.Component {
    render() {
        return <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} />;
    }
}