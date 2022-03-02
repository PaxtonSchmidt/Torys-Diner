import { useState } from 'react';
import { Dropdown} from 'react-bootstrap';
import cup from '../../Img/Icons/cup.svg';

const linkStyle = {
    color: '#1a1a1a',
    minFontSize: '5px',
    maxFontSize: '18px'
}

let buttonStyle = {
    color: '#1a1a1a'
}



export default function NavButton() {

    return(
        <div>
            <Dropdown style={{marginTop: '15px', position: 'absolute', paddingLeft: '1vw'}} className='navButton'>
                <Dropdown.Toggle 
                    variant='outline-light'
                    style={buttonStyle} //style
                    className='shadow-sm rounded'> 
                    <img src={cup} style={{height: '25px', paddingLeft: '5px'}}/>
                </Dropdown.Toggle>  

                <Dropdown.Menu style={{backgroundColor: 'white', borderColor: 'white', padding: '0'}} className='shadow-sm rounded' >
                    <Dropdown.Item href='#Menu' style={linkStyle}>Menu</Dropdown.Item>
                    <Dropdown.Item href='#HoursAndLocation' style={linkStyle}>Hours and Location</Dropdown.Item>
                    <Dropdown.Item href='#Reservations' style={linkStyle}>Reservations</Dropdown.Item>
                    <Dropdown.Item href='#MugClub' style={linkStyle}>Mug Club</Dropdown.Item>
                    <Dropdown.Item href='#Contact' style={linkStyle}>Contact Us</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}







