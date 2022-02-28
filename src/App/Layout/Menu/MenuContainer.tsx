import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Menu from './Menu'

export default function MenuContainer() {
    return(
        <div id='Menu' className='menuStyles'>
            <Row>
                <Col xs={12} style={{textAlign:'center'}}>
                    <h1 style={{marginTop: '40px', color: 'white'}}>All-Day Menu!</h1>
                    <p style={{color: 'white'}}>All meals include choice of one: Coffee, Tea, Milk, Chocolate Milk, Juice or Lemonade</p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col>
                    <Menu />
                </Col>
            </Row>
        </div>
    )
}