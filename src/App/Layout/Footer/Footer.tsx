import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import facebook from '../../Img/Icons/facebook.svg';
import geo from '../../Img/Icons/geo-alt-fill.svg';
import whatsapp from '../../Img/Icons/whatsapp.svg';

export default function Footer() {
    return(
        <div className='footer'>
            <img src={facebook} className='footerIcon' />
            <img src={geo}  className='footerIcon'/>
            <img src={whatsapp}  className='footerIcon'/>
        </div>
    )
}