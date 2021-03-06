import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import icon from '../../images/logo.png'
import { useHistory } from 'react-router';

const
    Footer = () => {

        const history = useHistory();

        const handleClick = () => {
            history.push(`/contact`);
        }
        return (

            <Container fluid className="  footer text-white">
                <Container>
                    <Row>

                        <Col lg={5}>
                            <img src={icon} alt="" /> <br /> <br />
                            <p>
                                The Heart Care Heart Hospital have latest technology machines with experty Heart specialist doctors consectetur adipisicing elit. Distinctio vitae maiores enim ea atque? Natus iure autem cumque, quaerat distinctio pariatur velit illo hic a eos paccusamus.
                            </p> <br />
                            <button onClick={handleClick} className="btn btn-danger"> Contact Us</button>
                        </Col>

                        <Col lg={3}>
                            <h3>We Provides You</h3> <br />
                            <h6 className="mb-2"><span className="text-danger"><i className="fas fa-angle-double-right"></i></span> Experineced Sergeons</h6>
                            <h6 className="mb-2"> <span className="text-danger"><i className="fas fa-angle-double-right"></i></span> Special Treatments</h6>
                            <h6 className="mb-2"><span className="text-danger"><i className="fas fa-angle-double-right"></i></span> Comfort Environment</h6>
                            <h6 className="mb-2"><span className="text-danger"><i className="fas fa-angle-double-right"></i></span><span className="text-danger"></span> Talented Cardiologist</h6>
                            <h6 className="mb-2"><span className="text-danger"><i className="fas fa-angle-double-right"></i></span><span className="text-danger"></span> High Tech Equipments</h6>
                            <h6 className="mb-2"><span className="text-danger"><i className="fas fa-angle-double-right"></i></span><span className="text-danger"></span> Personalized Care</h6>
                        </Col>

                        <Col lg={4}>
                            <h3>Contact Us</h3> <br />
                            <h6 className="mb-2"><span className="text-danger"><i className="fas fa-map-marker-alt"></i></span> Main Branch <br /> Char Shoul Mari, Rowmari, Kurigram</h6>
                            <h6 className="mb-2"> <span className="text-danger"><i className="fas fa-mobile-alt"></i></span> Call us Anytime at: <br /> +880 1303 394250</h6>
                            <h6 className="mb-2"><span className="text-danger"><i className="fas fa-user-injured"></i></span> For Inquiry: <br />info@heartcare.com</h6>
                            <h6 className="mb-2"><span className="text-danger"></span><span className="text-danger"><i className="fas fa-stopwatch"></i></span> Our Timings: <br />Sat-Thurs: 9:00am-7:00pm</h6>
                        </Col>

                    </Row>
                </Container>
            </Container>
        );
    };

export default Footer;