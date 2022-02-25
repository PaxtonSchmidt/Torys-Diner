import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import Logo from "./Logo";
import NavButton from "./NavButton";


export default function NavBar() {
    return (     
        <div>
            <NavButton />  
            <Container fluid className='barContainer'>
                <Logo /> 
            </Container>
       </div>
    )
}





