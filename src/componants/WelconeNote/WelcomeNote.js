import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const WelcomeNote = () => {
    return (
        <div>
            <Container className="mt-5">
                <Row>
                    <Col lg={7}>
                        <h4 className="text-danger">Welcome To Your</h4>
                        <h2>Heart Care</h2>
                        <p>
                            The Heart Care Heart Hospital have latest technology machines with experty Heart specialist doctors consectetur adipisicing elit. Distinctio vitae maiores enim ea atque? Natus iure autem cumque, quaerat distinctio pariatur velit illo hic a eos accusamus deleniti totam repellendus reiciendis, nobis vero dolorem nesciunt officia facere perspiciatis fugiat.
                            <br /><br />
                            Sapiente accusamus repudiandae architecto corporis aspernatur. Eligendi, accusamus quas mollitia. Natus iure autem cumque, quaerat distinctio pariatur velit illo hic a eos accusamus deleniti totam repellendus reiciendis, nobis vero dolorem nesciunt officia facere perspiciatis fugiat.
                        </p> <br />
                        <h4 className="text-warning">Dr. Raju Ahmed</h4>
                        <h3>MS Heart Care Hospital</h3>
                    </Col>
                    <Col lg={5}>
                        <img className="img-fluid w-100" src="https://www.dashospital.com/myimages/services/cardiology-1.jpg" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WelcomeNote;