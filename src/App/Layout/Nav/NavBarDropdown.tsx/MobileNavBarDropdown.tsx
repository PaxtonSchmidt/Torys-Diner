 import React from 'react';
import { Button, ButtonGroup, Offcanvas } from 'react-bootstrap';
import { MobileNavbarProps } from '../../../Script/Interfaces/MobileNavbarProps';

export default function MobileNavBarDropdown(props: MobileNavbarProps){
    
    return (
    <>
        <Offcanvas show={props.show} onHide={props.onClick} placement='top' style={{height: '80px'}} >
            <Offcanvas.Body className='mobileDropdownButtonGroup' >
                <ButtonGroup >
                    <Button href='#Menu' className='shadow-none' onClick={props.onClick} style={{height: '20px', backgroundColor: 'transparent', border: 'none'}}>
                        <p className='navButton'>Menu</p>
                    </Button>
                    <Button href='#MugClub' className='shadow-none' onClick={props.onClick} style={{height: '20px', backgroundColor: 'transparent', border: 'none'}}>
                        <p className='navButton'>Mug Club</p>
                    </Button>
                    <Button href='#Location' className='shadow-none' onClick={props.onClick} style={{height: '20px', backgroundColor: 'transparent', border: 'none'}}>
                        <p className='navButton'>Location</p>
                    </Button>
                    <Button href='#Contact' className='shadow-none' onClick={props.onClick} style={{height: '20px', backgroundColor: 'transparent', border: 'none'}}>
                        <p className='navButton'>Contact</p>  
                    </Button>
                </ButtonGroup>
            </Offcanvas.Body>
        </Offcanvas>
    </>
    )
}