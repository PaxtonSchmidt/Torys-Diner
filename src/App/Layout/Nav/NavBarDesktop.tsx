import React from "react";
import { Button, ButtonGroup, Col, Container,Row } from "react-bootstrap";
import MainHeader from "./MainHeader";


//dont use bootstrap you dummy
//float header h1 right and ul of links position right


export default function NavBarDesktop() {
    return (     
    <Container fluid className='allComponentsWrapper' style={{position:'relative'}}>
        <Row > 
            <MainHeader class='mainHeaderDesktop header'/>
            <div style={{width: '100%', justifyContent: 'right'}}>
                <ButtonGroup style={{height: '50px', paddingTop: '50px', marginRight: '3vw', float: 'right'}}>
                    <Button href='#Menu' className='shadow-none' style={{width: 'fit-content', padding: '0px', backgroundColor: 'transparent', border: 'none', textAlign: 'right'}}>
                        <p className='navButton'>Menu</p>
                    </Button>
                    <Button href='#MugClub' className='shadow-none' style={{width: 'fit-content', padding: '0px', backgroundColor: 'transparent', border: 'none', textAlign: 'right'}}>
                        <p className='navButton'>Mug Club</p>
                    </Button>
                    <Button href='#Location' className='shadow-none' style={{width: 'fit-content', padding: '0px', backgroundColor: 'transparent', border: 'none', textAlign: 'right'}}>
                        <p className='navButton'>Location</p>
                    </Button>
                    <Button href='#Contact' className='shadow-none' style={{width: 'fit-content', padding: '0px', backgroundColor: 'transparent', border: 'none', textAlign: 'right'}}>
                        <p className='navButton'>Contact</p>  
                    </Button>
                </ButtonGroup>
            </div>
        </Row>
    </Container>
    )
}

