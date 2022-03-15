import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Menu from './Menu';
import detail from '../../Img/Menu/TDdetail.svg';

export default function MenuContainer() {
    return(
        <Container id='Menu' fluid className='allComponentsWrapper' >
            <div style={{margin: '0', width: '100%', borderRadius: '20px'}}>
                <img src={detail} style={{width: '100%'}}/>  
                <Menu />
            </div>
        </Container>
    )
}