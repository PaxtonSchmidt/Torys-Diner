import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Form from './MugClub';
import lobby from '../../Img/About/lobby.png';

export default function MugClubContainer() {
    return(
            <Row id='MugClub' className='mugClubStyles' style={{height: '500px', border: '5px solid red', borderRadius: '20px', backgroundColor: '#e4cd70', margin: '2vw'}}>
                <Col style={{width: '50%', padding: '0px'}}>                            
                    <Container style={{fontWeight: 'bold', textAlign: 'center'}}>
                        <h1 style={{color: '#d16666'}}>Mug Club</h1>
                        <p style={{color: '#034732'}}>Be one of the coolest kids on the block, purchase your very own Torys Diner coffee mug and enjoy a month of free refills</p>
                    </Container>
                </Col>
                <Col style={{padding: '0px'}}>
                    <div style={{height: '100%', width: '100%', position: 'relative', overflowY: 'hidden', borderRadius: '0px 9px 9px 0px'}}>
                        <img src={lobby} className='mugClubImg' />
                    </div>
                </Col>
            </Row>
    )
}
