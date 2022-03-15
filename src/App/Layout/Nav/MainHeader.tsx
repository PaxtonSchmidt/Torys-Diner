import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import logo from '../../Img/Logo/td logo 2 22 22.png';


export default function MainHeader() {
    return (
        <div className='allComponentsWrapper header mainHeader'>
            <span className='headerBlue'>T</span>
            <span className='headerBlue'>O</span>
            <span className='headerBlue'>R</span>
            <span className='headerBlue'>Y</span>
            <span className='headerBlue'>'</span>
            <span className='headerBlue'>S</span>

            <span className='headerPink' style={{marginLeft: '1vw'}}>D</span>
            <span className='headerPink' >I</span>
            <span className='headerPink' >N</span>
            <span className='headerPink' >E</span>
            <span className='headerPink' >R</span>
        </div>
        )
    }
