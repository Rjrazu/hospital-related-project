import React, { useEffect, useState, } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const Service = () => {
    const { serviceId } = useParams();


    const [serviceDetails, setServiceDetails] = useState([])
    const [singleService, setSingleService] = useState({})

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data.services))
    }, []);


    useEffect(() => {
        const foundService = serviceDetails.find(service => service.id === parseInt(serviceId)

        );

        setSingleService(foundService);
    }, [serviceId, serviceDetails]);

    return (
        <div className="">
            <Container>
                <Card className="p-3 shadow">
                    <p className="text-center mt-1"><Card.Img variant="top" className="rounded img-fluid" src={singleService?.image} /></p>
                    <Card.Body>
                        <h1> {singleService?.name}</h1>
                        <h4> {singleService?.description}</h4>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Service;