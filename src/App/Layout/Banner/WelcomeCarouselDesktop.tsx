import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import lobby from '../../Img/About/lobby.png';
import bannerSmall from '../../Img/About/bannerSmall.png';



export default function welcomeCarouselDesktop() {
    return (
        <Carousel className='welcomeCarousel CarouselLargeViewport'> 
            <Carousel.Item className='CarouselImgLg'>
                <div className='carouselImgDiv'>
                    <img alt='Torys Diner Banner' src={bannerSmall} className='welcomeCarouselImg' />
                </div>
            </Carousel.Item>
            <Carousel.Item className='CarouselImgLg'>
                <div className='carouselImgDiv'>
                    <img alt='Lobby picture' src={lobby} className='welcomeCarouselImg' />
                </div>
            </Carousel.Item >
        </Carousel>
    )
}