import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import lobbyBig from '../../Img/About/lobbyBig.png';
import lobby from '../../Img/About/lobby.png';
import banner from '../../Img/About/banner.png';
import bannerSmall from '../../Img/About/bannerSmall.png';
import closeUp from '../../Img/About/food close up.png';



export default function welcomeCarouselSm() {
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