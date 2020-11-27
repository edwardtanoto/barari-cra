import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Form, Button, Nav, NavDropdown, FormControl } from 'react-bootstrap'
import logo from '../images/LOGO.png'
import ig from '../images/icons8-instagram.svg'
import mail from '../images/icons8-secured-letter-64.png'
import { useTranslation } from 'react-i18next';

import '../App.css';

export const Header = () => {
    const { t, i18n } = useTranslation();

    const handleClick = lang => {
        i18n.changeLanguage(lang)
    }

    return (


        // <header>
        //     <nav className="navbar navbar-expand-md navbar-light" style={{ padding: '40px' }}>
        //         <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        //             <ul className="navbar-nav mr-auto">
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="./index.html">HOME</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">ABOUT US</a>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="mx-auto order-0">
        //             <a className="navbar-brand mx-auto" href="#"><img src={logo} width="150px" /></a>

        //         </div>
        //         <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 nav-left">
        //             <ul className="navbar-nav ml-auto">
        //                 <li className="nav-item">
        //                     <a className="nav-link active" href="#">PRODUCTS</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">CONTACT US</a>
        //                 </li>
        //             </ul>

        //         </div>

        //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //     </nav>
        //  </header>
        <>
            <div className="top">
                <img src={ig} width="36px" />
                <img src={mail} width="36px" />
                <button className="btn btn-light" onClick={() => handleClick('en')}>
                    EN
                </button>
                <button className="btn btn-light" onClick={() => handleClick('id')}>
                    ID
                </button>
            </div>
            <Navbar expand="lg" style={{ position: 'relative' }}>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="text-center">
                    <Nav className="justify-content-start">
                        <Link className="cool-link pl-5 pr-5 pt-1 pb-1 a" to="/about">About</Link>
                        <Link className="cool-link pl-5 pr-5 pt-1 pb-1 a" to="/retailers">Retailers</Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Navbar.Brand><Link to="/"><p style={{ textAlign: 'center' }}><img className="logo" src={logo} /></p></Link></Navbar.Brand>
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
