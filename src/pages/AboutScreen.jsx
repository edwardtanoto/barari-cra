import React from 'react'
import image from '../images/aboutpic.jpeg'
import { Container, Row, Col } from 'react-bootstrap'

export const AboutScreen = () => {
    return (
        <div id="about">
            <Container>
                <Row>
                    <Col md={4}><img src={image} alt="image" width="100%" /></Col>
                    <Col md={8} className="align-self-end mt-5">
                        <h4>About Us</h4>

                        <p className="light-text">Naseem Al Barari General Trading was founded in 1991 in Jordan. We export and import various types of foodstuffs from various parts of the world. Our two main commodities are dates and tea. The Barari Group owns and operates several date mills and facilities in the UAE, Iraq, Algeria, Tunisia, and Sri Lanka. Now Barari has been present in Indonesia since 2013 with various variants of dates and processed food products made from dates that will always meet the needs of the Indonesian people.</p>
                    </Col>
                    <Col md={8} className="mt-5 pt-2">
                        <h4>Vision</h4>

                        <p className="light-text">To become both trusted dates suppliers and trusted selected date-based premium snacks for people in Indonesia.</p>
                    </Col>
                    <Col md={10} className="">
                        <h4>Mission</h4>

                        <p className="light-text">
                            - Trade Barari products to fulfill consumer needs in Indonesia.  <br />
                         - Maintain the quality and quantity of Barari products to suit the demands of consumers in Indonesia  <br />
                         - Increase product promotion through social media and other promotional media. <br />
                         - Increase consumer confidence in Barari products.  <br />
                         - Introducing to the people of Indonesia the many benefits of dates.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
