import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Services from '../Services/Services';

const AllServices = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => setServices(data.services))
    }, [])
    return (
        <div className="mb-5 mt-5">
            <Container>
                <div className="text-center mb-4">
                    <h4 className="text-danger">Our Departments</h4>
                    <h2>DEPARTMENTAL SERVICES</h2>
                </div>

                <Row xs={1} md={4} className="g-4">

                    {
                        services.map(service =>
                            <Services
                                key={service.key}
                                program={service}
                            ></Services>)
                    }
                </Row>

            </Container>
        </div>
    );
};

export default AllServices;