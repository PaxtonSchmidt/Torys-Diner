import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import logo from '../../Img/Logo/td logo 2 22 22.png';

const logoImgStyle = {
    height: '50px'
}

export default function Logo() {
    return (
        <Container className='logoStyles' >
            <img src={logo} alt='Torys Diner Logo' style={logoImgStyle} /> 
        </Container> 
        )
    }
