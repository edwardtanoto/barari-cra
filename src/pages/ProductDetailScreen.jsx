import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import ImageGallery from 'react-image-gallery';
import { kebabcase } from '../utils/kebabcase'
import shopee from '../images/shopee.png';
import tokped from '../images/tokopedia-seeklogo.com.svg'
import LazyLoad from 'react-lazyload'
import { PRODUCTS } from '../context/data'

export const ProductDetailScreen = ({ match }) => {
    const productmatch = match.params.product;
    const { language } = useContext(GlobalContext);
    const product = PRODUCTS.filter(product => {
        return productmatch === kebabcase(product.title);
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
            return <LazyLoad><ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} /></LazyLoad>;
        }
    }

    return (
        <div id="about">
            <div className="pt-5 container">
                {PRODUCTS ? product.map((product) => {
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
                                    <p className='light-text'>{language === "id" ? product.description : product.englishdesc}</p>
                                </div>
                                <div><h6 className="light-text"><u>{language === "en" ? 'Shop Now' : 'Belanja Sekarang'}</u></h6>
                                    <img alt="shopee" width="36px" src={shopee} />
                                    <img alt="tokped" width="36px" src={tokped} />
                                </div>
                                <div className="d-flex justify-content-end">
                                    <Link className="a" to="/products">&lt;&lt; {language === "en" ? 'Back' : 'Kembali'}</Link>
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


