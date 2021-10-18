import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Doctors = () => {
    return (
        <div className="mb-5 mt-5">
            <Container>
                <div className="text-center">
                    <h4 className="text-danger">Our Team</h4>
                    <h2>OUR EXPERTS</h2>
                </div>
                <Row xs={2} md={4} className="g-4">
                    <Col>
                        <Card className="p-3 shadow">

                            <p className="text-center mt-1"><Card.Img variant="top" className="rounded" style={{ maxWidth: "250px", height: "200px" }} src="" /></p>
                            <Card.Body>
                                <Card.Title>Name</Card.Title>
                                <p>Experts</p>
                                <Button variant="success">Click For Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3 shadow">

                            <p className="text-center mt-1"><Card.Img variant="top" className="rounded" style={{ maxWidth: "250px", height: "200px" }} src="" /></p>
                            <Card.Body>
                                <Card.Title>Name</Card.Title>
                                <p>Experts</p>
                                <Button variant="success">Click For Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3 shadow">

                            <p className="text-center mt-1"><Card.Img variant="top" className="rounded" style={{ maxWidth: "250px", height: "200px" }} src="" /></p>
                            <Card.Body>
                                <Card.Title>Name</Card.Title>
                                <p>Experts</p>
                                <Button variant="success">Click For Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3 shadow">

                            <p className="text-center mt-1"><Card.Img variant="top" className="rounded" style={{ maxWidth: "250px", height: "200px" }} src="" /></p>
                            <Card.Body>
                                <Card.Title>Name</Card.Title>
                                <p>Experts</p>
                                <Button variant="success">Click For Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Doctors;