import React from 'react';
import { useHistory } from 'react-router';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMailBulk, } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import icon from '../../images/logo.png'

const phoneIcon = <FontAwesomeIcon icon={faPhone} />
const emailIcon = <FontAwesomeIcon icon={faMailBulk} />

const Header = () => {

    const { user, logOut } = useAuth();
    const history = useHistory();

    const handleLoginButton = () => {
        history.push('/login')
    }

    const styleNavlink = {
        fontSize: "20px",
        fontWeight: '500',
        textDecoration: "none",
        marginRight: "20px",
    }
    const activeStyleNavlink = {
        fontWeight: "bold",
        color: "red",
        textDecoration: "underline"
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
                    <Navbar.Brand href="#"><img src={icon} alt="" /></Navbar.Brand>
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
                        {user?.uid
                            ?
                            <div>
                                <h6 className="d-inline me-1"> <span className="text-danger"><i class="far fa-user"></i></span> {user.displayName}</h6>
                                <Button onClick={logOut} variant="success">Logout</Button>
                            </div>
                            :
                            <Button onClick={handleLoginButton} variant="success">Login</Button>}

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;