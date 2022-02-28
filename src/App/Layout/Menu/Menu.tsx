import React from 'react';
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';

export default function Menu() {
    return(
    <Container style={{maxWidth: '400px', padding: '0px'}}>
        <Accordion flush className='shadow-lg'>
            <Accordion.Item eventKey="0" >
                <Accordion.Header >Omelet</Accordion.Header>
                <Accordion.Body style={{height: '150px', padding: '0'}}>
                    <Card style={{width: '100%', height: '100%', padding: '0', margin: '0', border: 'none'}}>
                        <Card.Header style={{border: 'none', backgroundColor: 'white'}}>2 eggs with any combination of Peppers, Onions, Cheese, Broccoli and Mushrooms</Card.Header>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>Fried or Scrambled</Accordion.Header>
                <Accordion.Body style={{height: '150px', padding: '0'}}>
                    <Card style={{width: '100%', height: '100%', padding: '0', margin: '0', border: 'none'}}>
                        <Card.Header style={{border: 'none', backgroundColor: 'white'}}>test</Card.Header>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>French Toast</Accordion.Header>
                <Accordion.Body style={{height: '150px', padding: '0'}}>
                    <Card style={{width: '100%', height: '100%', padding: '0', margin: '0', border: 'none'}}>
                        <Card.Header style={{border: 'none', backgroundColor: 'white'}}>test</Card.Header>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header>Chorizo Scramble</Accordion.Header>
                <Accordion.Body style={{height: '150px', padding: '0'}}>                
                    <Card style={{width: '100%', height: '100%', padding: '0', margin: '0', border: 'none'}}>
                        <Card.Header style={{border: 'none', backgroundColor: 'white'}}>test</Card.Header>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="4">
                <Accordion.Header>English Muffin and Sausage Gravy</Accordion.Header>
                <Accordion.Body>
                    <Card style={{width: '100%', height: '100%', padding: '0', margin: '0', border: 'none'}}>
                        <Card.Header style={{border: 'none', backgroundColor: 'white'}}>test</Card.Header>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
                <Accordion.Header>Meatloaf</Accordion.Header>
                <Accordion.Body>
                    <Card style={{width: '100%', height: '100%', padding: '0', margin: '0', border: 'none'}}>
                        <Card.Header style={{border: 'none', backgroundColor: 'white'}}>test</Card.Header>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
                <Accordion.Header>Chicken Noodle Soup</Accordion.Header>
                <Accordion.Body>
                    <Card style={{width: '100%', height: '100%', padding: '0', margin: '0', border: 'none'}}>
                        <Card.Header style={{border: 'none', backgroundColor: 'white'}}>test</Card.Header>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
                <Accordion.Header>Turkey Manhattan</Accordion.Header>
                <Accordion.Body>
                    <Card style={{width: '100%', height: '100%', padding: '0', margin: '0', border: 'none'}}>
                        <Card.Header style={{border: 'none', backgroundColor: 'white'}}>test</Card.Header>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8">
                <Accordion.Header>Grilled Cheese and Tomato Soup</Accordion.Header>
                <Accordion.Body>
                    <Card style={{width: '100%', height: '100%', padding: '0', margin: '0', border: 'none'}}>
                        <Card.Header style={{border: 'none', backgroundColor: 'white'}}>test</Card.Header>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="9">
                <Accordion.Header>Chili</Accordion.Header>
                    <Accordion.Body>
                        <Card style={{width: '100%', height: '100%', padding: '0', margin: '0', border: 'none'}}>
                        <Card.Header style={{border: 'none', backgroundColor: 'white'}}>test</Card.Header>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </Container>
    )
}