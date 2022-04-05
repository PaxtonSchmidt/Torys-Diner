import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Menu from './Menu';

export default function MenuContainer() {
    return(
        <Container id='Menu' fluid className='allComponentsWrapper' >
            <Menu />
        </Container>
    )
}