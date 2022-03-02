import React from 'react';
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';
import omelet from '../../Img/Menu/omelet.png';
import chili from '../../Img/Menu/chili.png';
import chorizo from '../../Img/Menu/chorizo.png';
import balloonFill from '../../Img/Icons/balloon-fill.svg'; 
import balloon from '../../Img/Icons/balloon.svg';

export default function Menu() {
    return(
    <Container style={{maxWidth: '400px', padding: '0px', paddingBottom: '40px'}}>
        <Accordion flush className='shadow-lg'>
            <Accordion.Item eventKey="0" >
                <Accordion.Header >Omelet</Accordion.Header>
                <Accordion.Body style={{padding: '0'}}>
                    <Card style={{width: '100%', height: '100%', padding: '0', margin: '0', border: 'none'}}>
                        <Card.Header style={{border: 'none', color:'white', backgroundColor: '#00183d'}}>2 eggs with any combination of Peppers, Onions, Cheese, Broccoli and Mushrooms<img src={balloonFill}/><img src={balloon}/></Card.Header>
                        <Card.Body style={{margin: '0', padding: '0'}}><img src={omelet}/></Card.Body>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>2 Eggs Fried or Scrambled</Accordion.Header>
                <Accordion.Body style={{padding: '0'}}>
                    <Card style={{width: '100%', height: '100%', padding: '0', margin: '0', border: 'none'}}>
                            <Card.Header style={{border: 'none', color: 'white', backgroundColor: '#00183d'}}><img src={balloonFill}/><img src={balloon}/></Card.Header>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>French Toast</Accordion.Header>
                <Accordion.Body style={{padding: '0'}}>
                    <Card style={{width: '100%', height: '100%', padding: '0', margin: '0', border: 'none'}}>
                        <Card.Header style={{border: 'none', color: 'white', backgroundColor: '#00183d'}}>Comes with Hash Brown Casserole<img src={balloon}/></Card.Header>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header>Chorizo Scramble</Accordion.Header>
                <Accordion.Body style={{padding: '0'}}>                
                    <Card style={{width: '100%', height: '100%', padding: '0', margin: '0', border: 'none'}}>
                        <Card.Header style={{border: 'none', color:'white', backgroundColor: '#00183d'}}>Chorizo, 2 Eggs, Peppers, Onions</Card.Header>
                        <Card.Body style={{margin: '0', padding: '0'}}><img src={chorizo}/></Card.Body>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="4">
                <Accordion.Header>English Muffin and Sausage Gravy</Accordion.Header>
                <Accordion.Body style={{padding: '0'}}>
                    <Card style={{width: '100%', height: '100%', padding: '0', margin: '0', border: 'none'}}>
                        <Card.Header style={{border: 'none', color:'white', backgroundColor: '#00183d'}}>Comes with Hash Brown Casserole</Card.Header>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
                <Accordion.Header>Meatloaf</Accordion.Header>
                <Accordion.Body style={{padding: '0'}}>
                    <Card style={{width: '100%', height: '100%', padding: '0', margin: '0', border: 'none'}}>
                        <Card.Header style={{border: 'none', color:'white', backgroundColor: '#00183d'}}>Comes with Mashed Potato and Vegetables</Card.Header>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
                <Accordion.Header>Chicken Noodle Soup</Accordion.Header>
                <Accordion.Body  style={{padding: '0'}}>
                    <Card style={{width: '100%', height: '100%', padding: '0', margin: '0', border: 'none'}}>
                    <Card.Header style={{border: 'none', color:'white', backgroundColor: '#00183d'}}>Comes with crackers</Card.Header>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
                <Accordion.Header>Turkey Manhattan</Accordion.Header>
                <Accordion.Body style={{padding: '0'}}>
                    <Card style={{width: '100%', height: '100%', padding: '0', margin: '0', border: 'none'}}>
                        <Card.Header style={{border: 'none', color:'white', backgroundColor: '#00183d'}}>Comes with Mashed Potato and Vegetables</Card.Header>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8">
                <Accordion.Header>Grilled Cheese and Tomato Soup</Accordion.Header>
                <Accordion.Body style={{padding: '0'}}>
                    <Card style={{width: '100%', height: '100%', padding: '0', margin: '0', border: 'none'}}>
                    <Card.Header style={{border: 'none', color:'white', backgroundColor: '#00183d'}}>Comes with crackers</Card.Header>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="9">
                <Accordion.Header>Chili</Accordion.Header>
                <Accordion.Body style={{padding: '0'}}>
                    <Card style={{width: '100%', height: '100%', padding: '0', margin: '0', border: 'none'}}>
                        <Card.Header style={{border: 'none', color:'white', backgroundColor: '#00183d'}}>Add Chopped Onions, Sour Cream and/or Shredded Cheddar for $1</Card.Header>
                        <Card.Body style={{margin: '0', padding: '0'}}><img src={chili}/></Card.Body>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="10">
                <Accordion.Header>Oatmeal</Accordion.Header>
                <Accordion.Body style={{padding: '0'}}>
                    <Card style={{width: '100%', height: '100%', padding: '0', margin: '0', border: 'none'}}>
                        <Card.Header style={{border: 'none', color:'white', backgroundColor: '#00183d'}}>A la carte</Card.Header>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </Container>
    )
}