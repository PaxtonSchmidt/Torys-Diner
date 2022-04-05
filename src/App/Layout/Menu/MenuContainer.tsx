import React from 'react';
import { Container } from 'react-bootstrap';
import Menu from './Menu';

export default function MenuContainer() {
    return(
        <Container id='Menu' fluid className='allComponentsWrapper' >
            <Menu />
        </Container>
    )
}