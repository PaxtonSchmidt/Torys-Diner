import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import facebook from '../../Img/Icons/facebook.svg';
import geo from '../../Img/Icons/geo-alt-fill.svg';
import whatsapp from '../../Img/Icons/whatsapp.svg';

export default function Footer() {
    return(
        <div className='footer'>
            <div className='footerIconBackground'>
                <img src={facebook} className='footerIcon' />
            </div>
            <div className='footerIconBackground'>
                <img src={whatsapp}  className='footerIcon'/>
            </div>
        </div>
    )
}