import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { PRODUCTS } from '../context/data';
import { Row, Col } from 'react-bootstrap'
import { kebabcase } from '../utils/kebabcase'
import LazyLoad from 'react-lazyload';

export const Product = ({ history }) => {
    const { language } = useContext(GlobalContext);
    return (
        <div id="about" className="pt-5 container">
            <Row>
                {PRODUCTS.map((product) => {
                    return (
                        <Col md={3} xs={6}>
                            <LazyLoad height={200} once >
                                <div className="product-card grow" onClick={() => {
                                    history.push(`product/${kebabcase(product.title)}`)
                                }}>
                                    <img className="card-img-top" alt={product.subtitle} width="100%" src={product.image} />
                                    <div className="sub-title">
                                        <h5>{product.title}</h5>
                                        <p className="light-text pb-5">{product.subtitle}</p>
                                    </div>
                                </div>
                            </LazyLoad>
                        </Col>)
                })}
            </Row>


        </div>
    )
}
