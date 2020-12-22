import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, DropdownButton, Dropdown } from 'react-bootstrap'
import logo from '../images/LOGO.png'
import ig from '../images/icon instagram.png'
import mail from '../images/icon email.png'

import '../App.css';

export const Header = () => {
    return (
        <>
            <div className="top">
                <a target="_blank" rel="noreferrer" href="https://instagram.com/barari.indonesia">
                    <img alt="logo" src={ig} width="30px" className="mr-2" />
                </a>
                <img alt="logo" src={mail} width="30px" className="mr-2" />
                <DropdownButton id="dropdown-item-button" className="mb-3" title="EN">
                    <Dropdown.Item as="button">EN</Dropdown.Item>
                    <Dropdown.Item as="button">ID</Dropdown.Item>
                </DropdownButton>
            </div>
            <Navbar expand="lg" style={{ position: 'relative' }}>
                <Navbar.Brand className="d-block d-sm-block  d-lg-none d-md-block"><Link to="/"><p style={{ textAlign: 'center' }}><img alt="logo" className="logo" src={logo} /></p></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="text-center">
                    <Nav className="justify-content-start">
                        <Link className="cool-link pl-5 pr-5 pt-1 pb-1 a" to="/about">About</Link>
                        <Link className="cool-link pl-5 pr-5 pt-1 pb-1 a" to="/retailers">Retailers</Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Navbar.Brand className="d-none d-md-block"><Link to="/"><p style={{ textAlign: 'center' }}><img alt="logo" className="logo" src={logo} /></p></Link></Navbar.Brand>
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
