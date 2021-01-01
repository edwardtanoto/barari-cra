import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Form } from 'react-bootstrap'
import logo from '../images/LOGO.png'
import arrow from '../images/arrow.png'
import ig from '../images/icon instagram.png'
import mail from '../images/icon email.png'
import { GlobalContext } from '../context/GlobalState';

import '../App.css';

export const Header = () => {
    const { language, changeLanguage } = useContext(GlobalContext);

    const handleChange = e => {
        changeLanguage(e.target.value);
    }

    return (
        <>
            <div className="top">
                <a target="_blank" rel="noreferrer" href="https://instagram.com/barari.indonesia">
                    <img alt="logo" src={ig} width="30px" className="mr-2" />
                </a>
                <a rel="noreferrer" href="mailto:info@barari-indonesia.com">
                    <img alt="logo" src={mail} width="36px" className="mr-2" />
                </a>

                <Form.Control as="select" className="langSelect" style={{ width: "80px", backgroundColor: "#bec1a4", boxShadow: "none" }} onChange={handleChange}>
                    <option value="en">EN</option>
                    <option value="id">ID</option>
                </Form.Control>

            </div>
            <Navbar expand="lg" style={{ position: 'relative' }}>
                <Navbar.Brand className="d-block d-sm-block  d-lg-none d-md-block"><Link to="/"><p style={{ textAlign: 'center' }}><img alt="logo" className="logo" src={logo} /></p></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="text-center">
                    <Nav className="justify-content-start">
                        <Link className="cool-link pl-5 pr-5 pt-1 pb-1 a" to="/about">{language === "en" ? 'About' : 'Tentang'}</Link>
                        <Link className="cool-link pl-5 pr-5 pt-1 pb-1 a" to="/retailers">{language === "en" ? 'Retailers' : 'Ritel'}</Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Navbar.Brand className="d-none d-md-block"><Link to="/"><p style={{ textAlign: 'center' }}><img alt="logo" className="logo" src={logo} /></p></Link></Navbar.Brand>
                </Navbar.Collapse>

                <Navbar.Collapse id="basic-navbar-nav" className="text-center">
                    <Nav className="ml-auto">
                        <Link className="cool-link pl-5 pr-5 pt-1 pb-1 a" to="/products">{language === "en" ? 'Products' : 'Produk'}</Link>
                        <Link className="cool-link pl-5 pr-5 pt-1 pb-1 a" to="/contact">{language === "en" ? 'Contact' : 'Kontak'}</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
