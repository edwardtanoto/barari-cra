import React from 'react'
import fruits from '../images/dates.jpg'
import { useTranslation } from 'react-i18next';

export const HomeScreen = () => {
    const { t, i18n } = useTranslation();

    const handleClick = lang => {
        i18n.changeLanguage(lang)
    }

    return (
        <div>
            {/* <div className="top">
                <div>
                    <button onClick={() => handleClick('en')}>
                        inggris
                </button>
                    <button onClick={() => handleClick('id')}>
                        indo
                </button>
                </div>
            </div> */}
            <div id="landing-page">
                <h1 className="title"><b>It's a Date</b></h1>
            </div>
            <section id="about">
                <div className="container">
                    <div className="row mt-5 mb-5">

                        <div className="col-lg-4 content-news">
                            <div className="wrap">
                                <div className="card news-card grow">
                                    <img className="image" src={fruits} alt="Dates" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 align-self-center" style={{ padding: '20px' }}>
                            <h1>Premium Dates Importer</h1>
                            <br /><br />
                            <p className="light-text">
                                Barari Indonesia is an official importer of Barari product that has been established since 2013. Our vision is to become a trusted and reliable premium date fruits based company. We have a mission to raise Indonesian society's awareness to the highly nutritioned and countless benefits of date fruits, and also the snacks it can produced.

                </p>
                            <br />
                            <h4>We are ready to serve you.</h4>
                            <p className="light-text">Visit out our <a className="b" href="./products.html">products page</a> for more information.</p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}