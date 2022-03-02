import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import facebook from '../../Img/Icons/facebook.svg';
import geo from '../../Img/Icons/geo-alt-fill.svg';
import whatsapp from '../../Img/Icons/whatsapp.svg';

export default function Footer() {
    return(
        <div className='footer'>
            <img src={facebook} style={{height: '70px', marginTop: '25px'}}/>
            <img src={geo} style={{height: '70px', margin: '25px 15%'}}/>
            <img src={whatsapp} style={{height: '70px', marginTop: '25px'}}/>
        </div>
    )
}