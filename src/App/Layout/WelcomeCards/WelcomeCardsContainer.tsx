import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import WelcomeCard from './WelcomeCard';
import food from '../../Img/About/food close up.png'
import MenuModal from '../Menu/MenuModal';
import ContactModal from '../ContactUs/ContactModal';

export default function WelcomeCardsContainer() {
    return (
        <Container id='Menu' className='welcomeCardContainer' >
                <Row id='Contact' style={{textAlign: 'center'}}>
                    <Col>
                        <div >
                            <h1 className='header' >Classic diner food made for you in Boquete</h1>
                            <p className='bannerText fadesAtLGViewport' style={{paddingTop: '0px'}}>Come to Tory's Diner and try our delicious, classic American breakfast! Made to order with fresh ingredients right as soon as you come in! Enjoy a meal, chat with friends and eat some delicious food that takes you home.</p>
                        </div>
                    </Col>
                </Row>
                <Row className='welcomeCardRow' style={{justifyContent: 'center', textAlign: 'center'}}>
                    <Col xs={6} sm={5} md={4} lg={3} >
                        <div >
                            <WelcomeCard 
                                src={food}
                                header='Menu'
                                subHeader='See if we have what youre lookin for!'
                                button={<MenuModal />}
                                />
                        </div>
                    </Col>
                    <Col xs={6} sm={5} md={4} lg={3}>
                        <WelcomeCard 
                            src={food}
                            header='Contact'
                            subHeader='Reach out and work with us!'
                            button={<ContactModal />}
                            />
                    </Col>
                </Row>
        </Container>  
        
    );
}
