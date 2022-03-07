import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Menu from './Menu';
import detail from '../../Img/Menu/TDdetail.svg';

export default function MenuContainer() {
    return(
        <Container id='Menu' className='menuStyles shadow-lg' style={{padding: '30px', borderRadius: '20px'}}>
            <Container style={{padding: '20px 0px', border: '4px solid white', margin: '0'}}>
                <img src={detail} style={{width: '100%'}}/>  
               <Menu />
            </Container>
        </Container>
    )
}