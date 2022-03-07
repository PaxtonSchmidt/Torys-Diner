import React from "react";
import { Card, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import NavButton from "./NavButton";


export default function NavBar() {
    return (     
    <Container fluid className='allComponentsWrapper'>
        <div >
            <Nav style={{justifyContent: 'center', width: '100%', height: '100%', alignContent: 'bottom'}}>
                <div>
                    <h1 className='mainHeader'>
                        <span>T</span>
                        <span>O</span>
                        <span>R</span>
                        <span>Y</span>
                        <span>'</span>
                        <span>S</span>

                        <span style={{marginLeft: '40px'}}>D</span>
                        <span>I</span>
                        <span>N</span>
                        <span>E</span>
                        <span>R</span>
                    </h1>
                </div>
            </Nav>
        </div>
        <div className='navChecker checkerBG shadow-sm'>
        </div>
    </Container>
    )
}


// <div className='navText' style={{padding: '20px', marginLeft: '150px'}}>
// <a>Reach Out</a>
// </div>

// <div className='navText' style={{padding: '20px'}}>
// <a>Location and Hours</a>
// </div>


// <div className='navText' style={{padding: '20px'}}>
//                     <a>Menu</a>
//                 </div>

//                 <div className='navText' style={{padding: '20px', marginRight: '150px'}}>
//                     <a>Mug Club</a>
//                 </div>








    // <Col><Card style={{border: 'none', height: '20px', backgroundColor: '#dddddd'}}><Card.Title>test</Card.Title></Card></Col>
    //             <Col><Card style={{border: 'none', height: '20px', backgroundColor: '#dddddd'}}><Card.Title>test</Card.Title></Card></Col>
    //             <Col><Card style={{border: 'none', height: '20px', backgroundColor: '#dddddd'}}><Card.Title>test</Card.Title></Card></Col>
    //             <Col><Card style={{border: 'none', height: '20px', backgroundColor: '#dddddd'}}><Card.Title>test</Card.Title></Card></Col>