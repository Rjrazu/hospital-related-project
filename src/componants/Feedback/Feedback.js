import React from 'react';
import { Accordion, Carousel, Col, Container, Row } from 'react-bootstrap';

const Feedback = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="text-center">
                            <h4 className="text-danger">Read What Says Our</h4>
                            <h2>HAPPY PATIENTS</h2>
                            <Carousel>
                                <Carousel.Item interval={1000}>
                                    <img
                                        className="d-block w-100"
                                        src="https://cdn.wallpapersafari.com/46/97/yuqztc.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vitae velit quaerat, voluptatum quos cupiditate eveniet dicta fuga et quod quidem eum nemo ipsam, culpa explicabo. Quod quibusdam sunt fugiat.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    <img
                                        className="d-block w-100"
                                        src="https://cdn.wallpapersafari.com/46/97/yuqztc.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://cdn.wallpapersafari.com/46/97/yuqztc.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="text-center">
                            <h4 className="text-danger">Feel Free For</h4>
                            <h2>ANY FAQ’S</h2>
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                </Row>


            </Container>
        </div>
    );
};

export default Feedback;