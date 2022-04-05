import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import WelcomeCard from './WelcomeCard';
import food from '../../Img/About/food close up.png'
import MenuModal from '../Menu/MenuModal';
import ContactModal from '../ContactUs/ContactModal';

export default function WelcomeCardsContainer() {
    return (
        <Container id='Menu' >
                <Row id='Contact' style={{textAlign: 'center'}}>
                    <Col>
                        <div >
                            <h1 className='header mainHeader subHeader'>Classic food made for you in Boquete!</h1>
                            
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
                            subHeader='Reserve a table or send us a message!'
                            button={<ContactModal />}
                            />
                    </Col>
                    <Col xs={6} lg={3} >
                        <WelcomeCard 
                            src={food}
                            header='Hours'
                            subHeader='8am to 2pm Wednesday through Friday. 8am to 12pm on Saturday and Sunday'
                          />
                    </Col>
                </Row>
        </Container>  
        
    );
}
