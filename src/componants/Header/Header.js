import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMailBulk, } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const phoneIcon = <FontAwesomeIcon icon={faPhone} />
const emailIcon = <FontAwesomeIcon icon={faMailBulk} />

const Header = () => {

    const styleNavlink = {
        fontSize: "20px",
        textDecoration: "none",
        marginRight: "20px",
    }
    const activeStyleNavlink = {
        fontWeight: "bold",
        color: "red",
    }
    return (
        <div>

            {/* // Top Navbar */}

            <Navbar bg="dark" expand="lg">
                <Container className="p-0">
                    <Navbar.Brand className="text-white me-auto" href="#"><span className="text-danger">{phoneIcon}</span> <span className="text-success"> Hot-Line :</span> +880 1303-394250</Navbar.Brand>
                    <Navbar.Brand className="text-white ms-auto" href="#"><span className="text-danger">{emailIcon}</span> <span className="text-success"> Email :</span> Rowmarigeneralhospital121@gmail.com</Navbar.Brand>
                </Container>
            </Navbar>



            {/* // Main Navbar */}

            <Navbar bg="light" expand="lg">
                <Container className="p-3">
                    <Navbar.Brand href="#">RGH</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink
                                style={styleNavlink}
                                activeStyle={activeStyleNavlink}
                                to="/home">Home</NavLink>
                            <NavLink
                                style={styleNavlink}
                                activeStyle={activeStyleNavlink}
                                to="/services">Services</NavLink>
                            <NavLink
                                style={styleNavlink}
                                activeStyle={activeStyleNavlink}
                                to="/doctors">Doctors</NavLink>
                            <NavLink
                                style={styleNavlink}
                                activeStyle={activeStyleNavlink}
                                to="/feedback">Feedback</NavLink>
                            <NavLink
                                style={styleNavlink}
                                activeStyle={activeStyleNavlink}
                                to="/contact">Contact Us</NavLink>
                        </Nav>
                        <Button variant="outline-success">Login</Button>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;