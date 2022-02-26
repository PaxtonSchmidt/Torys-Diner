import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TextArea } from "semantic-ui-react";
import Carousel from "./WelcomeCarousel";

const bodyStyles={
    marginTop: '70px',
    width: '100vw'
}

export default function BannerContent() {
    return (
        <div className='bannerContainer'>
            <Container style={bodyStyles} className='banner'  >
                <Row className='justify-content-center'>
                    <Col sm={12} md={8} lg={6}>
                        <Carousel />
                    </Col>
                    <Col sm={12} md={8} lg={4}>
                        <text >
                            <p className='bannerText fadesAtMedViewport' style={{paddingTop: '40%'}}>Torys Diner is</p>
                            <h1 className='bannerText bannerH1'>Bringing a little bit of home to your morning</h1>
                            <p className='bannerText fadesAtMedViewport'>at Hotel Isla Verde</p>
                        </text>
                    </Col>
                    <Col lg={1} className='fadesAtLargeViewport'></Col>
                    <Col lg={1} className='fadesAtLargeViewport'></Col>
                </Row>
            </Container>
        </div>
    )
}