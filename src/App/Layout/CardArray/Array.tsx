import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

export default function Array() {
    return (
        <Container fluid className='allComponentsWrapper'>
        <div style={{backgroundColor: '#fffffc', margin: '0px 1vw'}}>
            <Container fluid className='arrayStyles'>
                <Row >
                    <Col >
                        <text >
                            <h1 className='arrayText' style={{color: '#d16666'}}>What can we help you find?</h1>
                        </text>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col xs={9} sm={6} md={5} xl={2}>
                        <Card className='card shadow-sm border-0' style={{color: '#d16666', fontWeight: 'bold', backgroundColor: '#a0c4ff'}}>
                            <Card.Body>
                                <Card.Title>Menu</Card.Title>
                                <Card.Text>See if our food is what you're craving</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col xs={9} sm={6} md={5} xl={2} >
                        <Card className='card shadow-sm border-0' style={{color: '#d16666', fontWeight: 'bold', backgroundColor: '#a0c4ff'}}>
                            <Card.Body>
                                <Card.Title>Mug Club</Card.Title>
                                <Card.Text>Free refills for regular customers</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={9} sm={6} md={5} xl={2} >
                        <Card className='card shadow-sm border-0' style={{color: '#d16666', fontWeight: 'bold', backgroundColor: '#a0c4ff'}}>
                            <Card.Body>
                                <Card.Title>Contact</Card.Title>
                                <Card.Text>Connect with us</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col >
                    <Col xs={9} sm={6} md={5} xl={2} >
                        <Card className='card shadow-sm border-0' style={{color: '#d16666', fontWeight: 'bold', backgroundColor: '#a0c4ff'}}>
                            <Card.Body>
                                <Card.Title>Find Us</Card.Title>
                                <Card.Text>In the beauty of Hotel Isla Verde</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        </Container>
    )
}