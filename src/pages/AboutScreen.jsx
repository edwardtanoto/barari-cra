import React, { useContext } from 'react'
import image from '../images/aboutpic.jpeg'
import { Container, Row, Col } from 'react-bootstrap'

import { GlobalContext } from '../context/GlobalState';

export const AboutScreen = () => {
    const { language } = useContext(GlobalContext);

    return (
        <div id="about">
            <Container>
                <Row>
                    <Col md={4}><img src={image} alt="about" width="100%" /></Col>
                    <Col md={8} className="align-self-end mt-5">
                        <h4>{language === "en" ? 'About Us' : 'Tentang Kami'}</h4>

                        <p className="light-text">{language === "en" ? 'Naseem Al Barari General Trading was founded in 1991 in Jordan. We export and import various types of foodstuffs from various parts of the world. Our two main commodities are dates and tea. The Barari Group owns and operates several date mills and facilities in the UAE, Iraq, Algeria, Tunisia, and Sri Lanka. Now Barari has been present in Indonesia since 2013 with various variants of dates and processed food products made from dates that will always meet the needs of the Indonesian people.' : 'Naseem Al Barari General Trading didirikan pada tahun 1991 di Yordania. Kami mengekspor dan mengimpor berbagai jenis bahan makanan dari berbagai tempat di dunia. Dua komoditas utama kami adalah kurma dan teh. Barari Group memiliki dan mengoperasikan beberapa pabrik kurma dan fasilitas pengemasan di UAE, Iraq, Algeria, Tunisia serta Sri Lanka. Kini Barari telah hadir di Indonesia sejak tahun 2013 dengan berbagai macam varian kurma dan produk makanan olahan berbahan dasar kurma yang akan selalu memenuhi kebutuhan masyarakat Indonesia.'}</p>
                    </Col>
                    <Col md={8} className="mt-5 pt-2">
                        <h4>{language === "en" ? 'Vision' : 'Visi'}</h4>

                        <p className="light-text">{language === "en" ? 'To become both trusted dates suppliers and trusted selected date-based premium snacks for people in Indonesia.' : 'Untuk menjadi perusahaan pemasok kurma dan makanan ringan berbahan dasar kurma pilihan bagi masyarakat Indonesia.'}</p>
                    </Col>
                    <Col md={10} className="">
                        <h4>{language === "en" ? 'Mission' : 'Misi'}</h4>
                        {language === "en" ? (
                            <p className="light-text">
                                - Trade Barari products to fulfill consumer needs in Indonesia.  <br />
- Maintain the quality and quantity of Barari products to suit the demands of consumers in Indonesia  <br />
- Increase product promotion through social media and other promotional media. <br />
- Increase consumer confidence in Barari products.  <br />
- Introducing to the people of Indonesia the many benefits of dates.
                            </p>
                        ) : (
                                <p className="light-text">
                                    - Memasarkan produk Barari sebagai pemenuhan kebutuhan konsumen di Indonesia. <br />
- Menjaga kualitas dan kuantitasnya produk Barari agar sesuai dengan tuntutan konsumen di Indonesia.<br />
- Meningkatkan promosi produk melalui media online maupun media promosi lainnya.  <br />
- Meningkatkan kepercayaan konsumen akan produk Barari.  <br />
- Memperkenalkan kepada masyarakat Indonesia akan banyaknya manfaat dari buah kurma itu sendiri.<br />
                                </p>
                            )}

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
