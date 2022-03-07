import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Map from './Map';

export default function Location() {
    return (
            <Row style={{border: '10px solid red', borderRadius: '20px', backgroundColor: '#ffffff', margin: '2vw', height: '600px'}}>
                <Col xs={6} style={{justifyContent: 'right', width: '50%', padding: '0px'}}>
                    <Map />
                </Col>
                <Col xs={6} style={{padding:'0px'}}>                            
                    <Container style={{fontWeight: 'bold', textAlign: 'center'}}>
                        <h1 style={{color: '#ef8a17'}}>Hours</h1>
                        <p style={{color: '#034732', marginBottom: '0px'}}>Closed Monday and Tuesday</p>
                        <p style={{color: '#034732', marginBottom: '0px'}}>8am to 2pm Wednesday to Friday</p>
                        <p style={{color: '#034732'}}>8am to Noon Saturday and Sunday</p>
                    </Container>
                </Col>
                
            </Row>
    )
}
