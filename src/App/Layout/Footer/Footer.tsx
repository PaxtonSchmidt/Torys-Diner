import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import facebook from '../../Img/Icons/facebook.svg';
import geo from '../../Img/Icons/geo-alt-fill.svg';
import whatsapp from '../../Img/Icons/whatsapp.svg';

export default function Footer() {
    return(
        <div className='footer'>
            <div className='footerIconBackground shadow-sm'>
                <a href='https://www.facebook.com/Torys-Diner-105878168253164'><img src={facebook} className='footerIcon' /></a>
            </div>
            <div className='footerIconBackground shadow-sm'>
                <a href='https://api.whatsapp.com/send?phone=50763518745&app=facebook&entry_point=page_cta&fbclid=IwAR0i6eKa0ja_38GTfAO8GOsiYkuUYWbFEJJYZYHpaGWu2_-_SZNR0dw-vXM'><img src={whatsapp}  className='footerIcon'/></a>
            </div>
        </div>
    )
}