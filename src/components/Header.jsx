import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Form, Button, Nav, NavDropdown, FormControl } from 'react-bootstrap'
import logo from '../images/LOGO.png'
import ig from '../images/icons8-instagram.svg'
import mail from '../images/icons8-secured-letter-64.png'

import '../App.css';

export const Header = () => {

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
            <div style={{
                padding: '10px', backgroundColor: '#BEC1A4',
                display: 'flex', justifyContent: 'flex-end',
                width: '100%'
            }}>
                <img src={ig} style={{ width: '36px' }} />
                &nbsp;&nbsp;&nbsp;
                <img src={mail} style={{ width: '36px' }} />
                <NavDropdown bg="light" style={{ color: 'black' }} title="EN" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Bahasa Indonesia</NavDropdown.Item>
                </NavDropdown>
            </div>
            <Navbar expand="lg" style={{ paddingLeft: '120px', paddingRight: '120px', }}>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="text-center">
                    <Nav className="justify-content-start">
                        <Nav.Link to="/about">About</Nav.Link>
                        <Nav.Link to="/retailers">Retailers</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Navbar.Brand><Nav.Link to="/"><p style={{ textAlign: 'center' }}><img className="logo" src={logo} /></p></Nav.Link></Navbar.Brand>
                </Navbar.Collapse>

                <Navbar.Collapse id="basic-navbar-nav" className="text-center">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Products</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>



            </Navbar>
        </>
    )
}
