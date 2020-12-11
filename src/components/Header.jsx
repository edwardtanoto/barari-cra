import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Form, Button, Nav, NavDropdown, FormControl } from 'react-bootstrap'
import logo from '../images/LOGO.png'
import ig from '../images/icons8-instagram.svg'
import mail from '../images/envelope.svg'
import { useTranslation } from 'react-i18next';

import '../App.css';

export const Header = () => {
    const { t, i18n } = useTranslation();

    const handleClick = lang => {
        i18n.changeLanguage(lang)
    }

    return (
        <>
            <div className="top">
                <a href="https://instagram.com/barari.indonesia"></a>
                <img src={ig} width="35px" />
                <img src={mail} width="30px" />
                &nbsp;
                <button className="btn a btn-link" onClick={() => handleClick('en')}>
                    EN
                </button>
                <button className="btn a btn-link" onClick={() => handleClick('id')}>
                    ID
                </button>
            </div>
            <Navbar expand="lg" style={{ position: 'relative' }}>
                <Navbar.Brand className="d-block d-sm-block  d-lg-none d-md-block"><Link to="/"><p style={{ textAlign: 'center' }}><img className="logo" src={logo} /></p></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="text-center">
                    <Nav className="justify-content-start">
                        <Link className="cool-link pl-5 pr-5 pt-1 pb-1 a" to="/about">About</Link>
                        <Link className="cool-link pl-5 pr-5 pt-1 pb-1 a" to="/retailers">Retailers</Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Navbar.Brand className="d-none d-md-block"><Link to="/"><p style={{ textAlign: 'center' }}><img className="logo" src={logo} /></p></Link></Navbar.Brand>
                </Navbar.Collapse>

                <Navbar.Collapse id="basic-navbar-nav" className="text-center">
                    <Nav className="ml-auto">
                        <Link className="cool-link pl-5 pr-5 pt-1 pb-1 a" to="/products">Products</Link>
                        <Link className="cool-link pl-5 pr-5 pt-1 pb-1 a" to="/contact">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
