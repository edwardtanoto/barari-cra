import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { GlobalContext } from '../context/GlobalState';

export const RetailersScreen = () => {
    const { language } = useContext(GlobalContext);

    return (
        <div id="about">
            <Container>
                <Row>
                    <Col md={8} className="align-self-end mt-5">
                        <h4>{language === "en" ? 'Our Retailers' : 'Ritel Kami'}</h4>

                        <p className="light-text">{language === "en" ? 'We are in a partnership with these retailers to achieve our vision and mission.' : 'Kami bekerja sama dengan berbagai usaha ritel untuk menjalani visi dan misi kami.'}</p>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
