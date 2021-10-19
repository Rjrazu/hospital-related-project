import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './CoreService.css'

const CoreService = () => {
    return (
        <div >

            <Container fluid>
                <Row className="d-flex core align-items-center justify-content-center">
                    <Col lg={5}>
                        <Row >
                            <Col lg={6}>
                            </Col>
                            <Col lg={6}>
                                <Button variant="warning mb-1"><span className="text-danger"><i class="fas fa-angle-double-right"></i></span> Experineced Sergeons</Button> <br />
                                <Button variant="warning mb-1"><span className="text-danger"><i class="fas fa-angle-double-right"></i></span>Special Treatments</Button> <br />
                                <Button variant="warning mb-1"><span className="text-danger"><i class="fas fa-angle-double-right"></i></span>Comfort Environment</Button> <br />
                                <Button variant="warning mb-1"><span className="text-danger"><i class="fas fa-angle-double-right"></i></span> Talented Cardiologist</Button> <br />
                                <Button variant="warning mb-1"><span className="text-danger"><i class="fas fa-angle-double-right"></i></span> High Tech Equipments</Button> <br />
                                <Button variant="warning mb-1"><span className="text-danger"><i class="fas fa-angle-double-right"></i></span> Personalized Care</Button> <br />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={7} className="text-white">
                        <h3>Experienced Surgeons</h3>
                        <p><span className="text-white graduation"><i class="fas fa-graduation-cap"></i></span> Ut finibus sem in erat pretium, ultrices semper lorem aliquet. Nulla ultricies sagittis tellus at elementum. Cras consectetur congue diam nec imperdiet. Phasellus accumsan faucibus lectus.</p> <br />
                        <h6>
                            Vestibulum gravida massa ac sem potitor, ac effic.
                        </h6>
                        <h6>
                            Quisque non lacus tempus nisi fringilla feugiat.
                        </h6>
                        <h6>
                            Sed pretium diam in maximus is consectetur.
                        </h6>

                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default CoreService;