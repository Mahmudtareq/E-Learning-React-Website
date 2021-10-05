import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './ServiceData.css';

const ServiceData = (props) => {
    const { name, img, title } = props.service;
    return (
        <div>

            <Row >
                <Col xs={10} md={12} className="g-4">
                    <Card className="shadow m-2 height-card">
                        <Card.Img variant="top" className="image-container" src={img} height="180px" />
                        <Card.Body>
                            <Card.Title className="text-primary">
                                {name}
                            </Card.Title>
                            <Card.Text className="text-justify">
                                {title}
                            </Card.Text>
                            <Button className="btn btn-primary">Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default ServiceData;