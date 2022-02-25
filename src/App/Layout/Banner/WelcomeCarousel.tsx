import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import lobby from '../../Img/About/lobby.png';
import banner from '../../Img/About/banner.png';
import closeUp from '../../Img/About/food close up.png';


export default function welcomeCarousel() {
    return (
                <Carousel className='carousel-fade welcomeCarousel' >
                    <Carousel.Item >
                        <img src={banner} className='d-block w-100 rounded-circle welcomeCarouselImg' />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img src={lobby} className='d-block w-100 rounded-circle welcomeCarouselImg' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={closeUp} className='d-block w-100 rounded-circle welcomeCarouselImg' />
                    </Carousel.Item>
                </Carousel>
    )
}