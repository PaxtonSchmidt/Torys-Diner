import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import WelcomeCard from './WelcomeCard';
import food from '../../Img/About/food close up.png'

export default function WelcomeCardsContainer() {
    return (
        <Container>
                <Row style={{textAlign: 'center'}}>
                    <Col>
                        <div >
                            <p className='bannerText fadesAtLGViewport' style={{paddingTop: '100px', marginBottom: '0px'}}>Torys Diner is</p>
                            <h1 className='header sectionHeader' >Bringing a little bit of home to your morning</h1>
                            <p className='bannerText fadesAtLGViewport'>at Hotel Isla Verde</p>
                        </div>
                    </Col>
                </Row>
                <Row className='welcomeCardRow' style={{justifyContent: 'center', textAlign: 'center'}}>
                    <Col xs={10} md={6} lg={5} xl={4}>
                        <WelcomeCard 
                            src={food}
                            header='Menu'
                            subHeader='See if we have what youre lookin for!'
                            destinaton='#Menu'
                            />
                    </Col>
                    <Col xs={10} md={6} lg={5} xl={4}>
                        <WelcomeCard 
                            src={food}
                            header='Contact'
                            subHeader='Reach out and work with us!'
                            destinaton='#Menu'
                            />
                    </Col>
                </Row>
        </Container>  
        
    );
}
