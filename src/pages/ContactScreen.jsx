import React from 'react'
import kardus from '../images/Kardus.jpg'
import { Row, Col } from 'react-bootstrap'

export const ContactScreen = () => {
    return (
        <section id="contact" className="pt-5 pb-5">
            <div className="container">
                <Row>
                    <Col md={1}>

                    </Col>
                    <Col md={5}>
                        <img src={kardus} width="100%" />
                    </Col>
                    <Col md={6} className="align-self-end mt-5">
                        <form className="form-group" name="contact" method="POST" data-netlify="true">
                            <input type="hidden" name="form-name" value="contact" />
                            <label htmlFor="name">Name</label>
                            <input required className="form-control mb-2" type="text" name="name" />
                            <label htmlFor="email">Email</label>
                            <input required className="form-control mb-2" type="email" name="email" />
                            <label htmlFor="company">Subject</label>
                            <input required className="form-control mb-2" type="text" name="subject" />
                            <label htmlFor="message">Message</label><textarea className="form-control" name="message"></textarea>
                            <button className="mt-3 btn" style={{ backgroundColor: 'rgb(191,193,167)', color: 'whitesmoke' }} type="submit">Send</button>
                        </form>
                    </Col>

                </Row>
            </div>
        </section>
    )
}
