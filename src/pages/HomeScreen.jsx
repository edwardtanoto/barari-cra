import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom'

export const HomeScreen = () => {
    const { language } = useContext(GlobalContext);
    return (
        <div>
            <div id="landing-page">
                <h1 className="title"><b>It's a date</b></h1>
            </div>
            <section className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 align-self-center" style={{ padding: '20px' }}>
                            <h1>{language === "en" ? "Premium Dates Importer" : "Importir Kurma Premium"}</h1>
                            <br /><br />
                            <p className="light-text">
                                {language === "en" ? "Barari Indonesia is an official importer of Barari product that has been established since 2013. Our vision is to become a trusted and reliable premium date fruits based company. We have a mission to raise Indonesian society's awareness to the highly nutritioned and countless benefits of date fruits, and also the snacks it can produced." :
                                    "Barari Indonesia adalah importir resmi dari Barari yang telah berdiri sejak 2013. Visi kami adalah untuk menjadi perusahaan kurma dan makanan ringan bebasis kurma pilihan yang handal dan terpercaya. Misi Kami Memperkenalkan kepada masyarakat Indonesia betapa banyaknya vitamin dan manfaat dari buah kurma itu sendiri, beserta makanan ringan yang dapat di produksi hanya dari buah kurma itu sendiri."}


                            </p>
                            <br />
                            <h4>{language === "en" ? "We are ready to serve you." : "Kami siap melayani anda."}</h4>
                            {language === "en" ? (
                                <p className="light-text">Visit out our <Link className="b" to="/products">products page</Link> for more information.</p>
                            ) : (
                                    <p className="light-text">Kunjungi <Link className="b" to="/products">produk</Link> kami untuk informasi lebih lanjut.</p>
                                )}

                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}