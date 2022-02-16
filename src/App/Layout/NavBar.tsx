import React from "react";
import logo from '../Img/Logo/TDapp logo.png';
import { Container, Nav, Navbar } from "react-bootstrap";



const logoStyle = {
    maxHeight: '50px',
    paddingLeft: '2vmin'
    
}

const linkStyle = {
    color: 'white',
    minFontSize: '5px',
    maxFontSize: '18px',
    paddingLeft: '20px',
    justifyContent: 'end'
}

const barStyle = {
    background: 'linear-gradient(110deg, #722b44 30%, #fd7343 60%)',
    minWidth: '100%',
}

const mugClubText = 'Mug\u00A0Club'  //unicode is RAD!!! learn more
const contactUsText = 'Contact\u00A0Us'

export default function NavBar() {
    return (     
        <Navbar expand='md' style={barStyle} variant='light'>
            <Navbar.Brand>
                    <img src={logo} alt="Torys Diner Logo" style={logoStyle}/>
                    at Isla Verde
            </Navbar.Brand> 
            <Navbar.Toggle style={{justifyContent: 'end', marginRight: '20px'}}/>
            <Navbar.Collapse >
                <Nav >
                    <Nav.Link href='#About'          style={linkStyle}>About</Nav.Link>
                    <Nav.Link href='#Menu'          style={linkStyle}>Menu</Nav.Link>
                    <Nav.Link href='#Reservations'  style={linkStyle}>Reservations</Nav.Link>
                    <Nav.Link href='#MugClub'       style={linkStyle}>{mugClubText}</Nav.Link>   
                    <Nav.Link href='#Contact' style={linkStyle}>{contactUsText}</Nav.Link>
                </Nav>
            </Navbar.Collapse>
       </Navbar>
    )
}
