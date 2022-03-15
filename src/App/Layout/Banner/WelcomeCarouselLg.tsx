import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import lobbyBig from '../../Img/About/lobbyBig.png';
import lobby from '../../Img/About/lobby.png';
import banner from '../../Img/About/banner.png';
import bannerSmall from '../../Img/About/bannerSmall.png';
import closeUp from '../../Img/About/food close up.png';



export default function welcomeCarouselLg() {
    return (
        <Carousel className='welcomeCarousel CarouselLargeViewport'> 
            <Carousel.Item className='CarouselImgLg'>
                <div className='carouselImgDiv'>
                    <img src={bannerSmall} className='welcomeCarouselImg' />
                </div>
            </Carousel.Item>
            <Carousel.Item className='CarouselImgLg'>
                <div className='carouselImgDiv'>
                    <img src={lobby} className='welcomeCarouselImg' />
                </div>
            </Carousel.Item >
        </Carousel>
    )
}