import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import lobby from '../Img/About/lobby.png';
import banner from '../Img/About/banner.png';

export default function welcomeCarousel() {
    return (
        <div style={{justifyContent: 'center', display: 'flex'}}>
            <Carousel style={{ maxWidth: '600px', marginTop: '20px'}} >
                <Carousel.Item >
                    <img src={lobby} className='d-block w-100' />
                    <Carousel.Caption>
                        <h2>Osadjajsfljalk</h2>
                        <h4>at Isla Verde!</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img src={banner} className='d-block w-100' />
                    <Carousel.Caption>
                        <h2>Isla Verde</h2>
                        <p>in Bajo Boquete!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}