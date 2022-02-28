import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

export default function Array() {
    return (
        <div style={{backgroundColor: '#f2f0ff'}}>
            <Container fluid className='arrayStyles'>
                <Row >
                    <Col >
                        <text >
                            <h1 className='arrayText'>What can we help you find?</h1>
                        </text>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col xs={9} sm={6} md={4} lg={3} xl={2} >
                        <Card className='card shadow-sm border-0' >
                            <Card.Body>
                                <Card.Title>Menu</Card.Title>
                                <Card.Text>See if our food is what you're craving</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={9} sm={6} md={4} lg={3} xl={2} >
                        <Card className='card shadow-sm border-0' >
                            <Card.Body>
                                <Card.Title>Mug Club</Card.Title>
                                <Card.Text>Free refills for regular customers</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={9} sm={6} md={4} lg={3} xl={2} >
                        <Card className='card shadow-sm border-0' >
                            <Card.Body>
                                <Card.Title>Find Us</Card.Title>
                                <Card.Text>Tucked away in the beauty of Hotel Isla Verde</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={9} sm={6} md={4} lg={3} xl={2} >
                        <Card className='card shadow-sm border-0' >
                            <Card.Body>
                                <Card.Title>Reservations</Card.Title>
                                <Card.Text>Save a table or see how we can be your venue</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={9} sm={6} md={4} lg={3} xl={2} >
                        <Card className='card shadow-sm border-0' >
                            <Card.Body>
                                <Card.Title>Contact Us</Card.Title>
                                <Card.Text>Learn the best way to reach out</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col >
                </Row>
            </Container>
        </div>
    )
}