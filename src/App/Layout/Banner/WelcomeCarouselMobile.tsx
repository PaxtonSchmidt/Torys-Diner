import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import lobbyBig from '../../Img/About/lobbyBig.png';
import banner from '../../Img/About/banner.png';



export default function welcomeCarouselMobile() {
    return (
        <Carousel  className='welcomeCarousel'>
            <Carousel.Item>
                <div className='carouselImgDiv'>
                    <img src={banner} className='welcomeCarouselImg' />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='carouselImgDiv'>
                    <img src={lobbyBig} className='welcomeCarouselImg' />
                </div>
            </Carousel.Item>
        </Carousel>
    )
}