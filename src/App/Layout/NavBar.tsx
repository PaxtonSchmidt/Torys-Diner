import React from "react";
import logo from '../Img/Logo/TDapp logo.png';
import { Container, Nav, Navbar } from "react-bootstrap";



const logoStyle = {
    maxHeight: '50px',
    paddingLeft: '30px'
    
}

const linkStyle = {
    color: 'white',
    minFontSize: '5px',
    maxFontSize: '18px',
    paddingLeft: '30px'
}

const barStyle = {
    background: 'linear-gradient(110deg, #722b44 30%, #fd7343 60%)',
    minWidth: '100%'
}


const mugClubText = 'Mug\u00A0Club'  //unicode is RAD!!! learn more
const contactUsText = 'Contact\u00A0Us'

export default function NavBar() {
    return (     
        <Navbar expand= 'md' style={barStyle} variant='light'>
            <Navbar.Brand>
                    <img src={logo} alt="Torys Diner Logo" style={logoStyle} /> 
            </Navbar.Brand> 

            <Navbar.Toggle style={{marginRight: '20px'}}/>
            <Navbar.Collapse style={{justifyContent: 'center', marginRight: '225px'}}>
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
