import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TextArea } from "semantic-ui-react";
import Carousel from "./WelcomeCarousel";

export default function BannerContent() {
    return (
        <Container fluid className='allComponentsWrapper'>
            <div className='bannerContainer'>
                <Row style={{justifyContent: 'center'}}>
                    <Col className='carouselCol' sm={9} md={8} lg={6} xl={5} xxl={4} >
                        <Carousel />
                    </Col>
                    <Col sm={9} md={6} lg={4} xl={4} xxl={4} style={{textAlign: 'center'}}>
                        <text >
                            <p className='bannerText fadesAtLGViewport' style={{paddingTop: '20%', marginBottom: '0px'}}>Torys Diner is</p>
                            <h1 className='bannerText bannerH1' >Bringing a little bit of home to your morning</h1>
                            <p className='bannerText fadesAtLGViewport'>at Hotel Isla Verde</p>
                        </text>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}