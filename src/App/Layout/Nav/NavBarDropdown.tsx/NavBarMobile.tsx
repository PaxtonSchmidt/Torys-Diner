import React, { useState }  from "react";
import { Container } from "react-bootstrap";
import MainHeader from "../MainHeader";
import MobileNavBarButton from "./MobileNavBarButton";
import MobileNavBarDropdown from "./MobileNavBarDropdown";

export default function NavBarMobile() {
    //dropdown toggle state
    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(!show);    

    return (     
        <Container fluid className='allComponentsWrapper' style={{position:'relative', textAlign: 'center', height: 'fit-content'}}>
            <MainHeader class='mainHeaderMobile header' />
            <MobileNavBarButton show={show} onClick={handleToggle}/>
            
            <MobileNavBarDropdown show={show} onClick={handleToggle}/>
        </Container>
    )
}
