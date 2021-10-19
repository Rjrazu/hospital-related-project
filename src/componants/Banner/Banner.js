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
                <Col lg={6}>
                </Col>
                <Col lg={6} className="shadow rounded-3">
                    <h1 className="title">
                        Rowmari Medical College <br /> And Hospital!
                    </h1>
                    <p className="text-white mt-3">
                        Education is the passport to the future, <br /> for tomorrow belongs to those who prepare for it today.
                    </p>
                    <button onClick={handleClick} className="mt-3 contact-btn">Emergency Contact</button>
                </Col>
            </Row>
        </Container>


    );
};

export default Banner;