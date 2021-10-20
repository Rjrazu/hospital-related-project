import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Banner.css'

const Banner = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/contact`);
    }

    return (
        <Container fluid >
            <Row className="d-flex banner align-items-center justify-content-center">
                <Col sm={12} md={6} lg={6}>
                </Col>
                <Col sm={12} md={6} lg={6} className="shadow rounded-3">
                    <h1 className="title">
                        Heart Care <br /> Hospital!
                    </h1>
                    <p className="text-white mt-3">
                        The Heart Care Heart Hospital have latest technology machines with experty Heart specialist doctors consectetur adipisicing elit.
                    </p>
                    <button onClick={handleClick} className="mt-3 contact-btn">Emergency Contact</button>
                </Col>
            </Row>
        </Container>


    );
};

export default Banner;