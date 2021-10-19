import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = (props) => {
    const { name, description, image, id } = props.program;

    return (
        <div className="">
            <Col>
                <Card className="p-3 shadow">

                    <p className="text-center mt-1"><Card.Img variant="top" className="rounded" style={{ maxWidth: "250px", height: "200px" }} src={image} /></p>
                    <Card.Body>
                        <Card.Title> {name}</Card.Title>
                        <p> {description}</p>
                        <Link to={`/services/${id}`} > <Button variant="success"> Click For Details</Button> </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Services;