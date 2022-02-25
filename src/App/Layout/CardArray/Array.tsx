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
                <Row>
                    <Col>
                        <Card>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}