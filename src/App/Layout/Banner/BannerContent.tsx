import React from "react";
import {Container} from "react-bootstrap";
import CarouselContainer from "./CarouselContainer";

export default function BannerContent() {
    return (
        <Container fluid className='allComponentsWrapper'>
            <div className='bannerContainer'>
               <CarouselContainer />
            </div>
        </Container>
    )
}


   