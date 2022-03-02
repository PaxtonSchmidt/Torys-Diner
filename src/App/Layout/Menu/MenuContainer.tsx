import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Menu from './Menu';
import Menu2 from './Menu2';
import balloonFill from '../../Img/Icons/balloon-fill.svg'; 
import balloon from '../../Img/Icons/balloon.svg';

export default function MenuContainer() {
    return(
        <div id='Menu' className='menuStyles'>
            <Row>
                <Col xs={12} style={{textAlign:'left', marginLeft: '10vw'}}>
                    <h1 style={{marginTop: '40px', color: '#1a1a1a'}}>All-Day Menu!</h1>
                    <p style={{marginBottom: '0'}}>All meals include choice of one: Coffee, Tea, Milk, Chocolate Milk, Juice or Lemonade</p>
                    <p style={{marginBottom: '0'}}><img src={balloonFill}/>Comes with Hash Brown Casserole and Buttered Toast</p>
                    <p style={{marginBottom: '10px'}}><img src={balloon}/>Comes with choice of Bacon or Sausage Patty</p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col>
                    <Menu2 />
                    <Menu />
                </Col>
            </Row>
        </div>
    )
}