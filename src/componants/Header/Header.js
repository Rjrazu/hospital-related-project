import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMailBulk, } from '@fortawesome/free-solid-svg-icons'

const phoneIcon = <FontAwesomeIcon icon={faPhone} />
const emailIcon = <FontAwesomeIcon icon={faMailBulk} />

const Header = () => {
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
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Services</Nav.Link>
                            <Nav.Link href="#action3" >Doctors</Nav.Link>
                            <Nav.Link href="#action4" >Avout Us</Nav.Link>
                            <Nav.Link href="#action5" >Contact</Nav.Link>
                        </Nav>
                        <Button variant="outline-success">Login</Button>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;