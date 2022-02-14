import React from "react";
import logo from './TDapp logo.png';
import { Container, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const logoStyle = {
    height: '7vmin',
    paddingLeft: '1vmin'
    
}

const linkStyle = {
    color: 'white',
    fontSize: '18px'
}

const barStyle = {
    backgroundColor: '#27273f',
    width: '100%'
}

const mugClubText = 'Mug\u00A0Club'  //unicode is RAD!!! learn more

export default function NavBar() {
    return (     
        <Navbar style={barStyle}>
            <Navbar.Brand>
                    <img src={logo} style={logoStyle}/>
            </Navbar.Brand> 

            <Container style={{marginLeft: 0}}>
                <Nav.Link href='#Home'          style={linkStyle}>Home</Nav.Link>
                <Nav.Link href='#Menu'          style={linkStyle}>Menu</Nav.Link>
                <Nav.Link href='#Reservations'  style={linkStyle}>Reservations</Nav.Link>
                <Nav.Link href='#MugClub'       style={linkStyle}>{mugClubText}</Nav.Link>   
            </Container>
            <Container></Container>
            <Container style={{justifyContent: 'end'}}>
                <Nav.Link href='#Contact' style={linkStyle}>Contact</Nav.Link>
            </Container>
       </Navbar>
    )
}
