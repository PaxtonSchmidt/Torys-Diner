import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Map from './Map';

export default function Location() {
    return (
  
  <Container id='HoursAndLocation' fluid style={{width: '100vw', marginBottom: '150px', paddingBottom: '50px', backgroundColor: '#00183d', paddingTop: '50px'}}>
            <Row style={{justifyContent: 'center'}}>
                <Col md={3} lg={3} xl={3}>
                    <h1 style={{color: 'white'}}>Open</h1>
                    <h5 style={{color: 'white'}}>8am to 2pm on Wednesday, Thursday and Friday</h5>
                    <h5 style={{color: 'white'}}>8am to Noon on Saturday and Sunday</h5>
                </Col>
                <Col md={9} lg={8} xl={4} >
                    <Map />
                </Col>
            </Row>
        </Container>
    )
}