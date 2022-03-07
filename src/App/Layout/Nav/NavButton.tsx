import { useState } from 'react';
import { Dropdown} from 'react-bootstrap';
import cup from '../../Img/Icons/cup.svg';

const linkStyle = {
    color: '#f45d01',
    minFontSize: '5px',
    maxFontSize: '18px',
    fontWeight: 'bold'
}


export default function NavButton() {

    return(
        <div>
            <Dropdown style={{marginTop: '15px', position: 'absolute', paddingLeft: '1vw'}} className='navButton'>
                <Dropdown.Toggle 
                    variant='outline-light'
                    style={{color: '#f45d01', border: 'none'}}
                    className='button shadow-sm rounded '> 
                    <img src={cup} style={{height: '25px', paddingLeft: '5px'}}/>
                </Dropdown.Toggle>  

                <Dropdown.Menu style={{backgroundColor: '#fdffb6', padding: '0', border: 'none'}} className='shadow-sm rounded' >
                    <Dropdown.Item href='#Menu' style={linkStyle}>Menu</Dropdown.Item>
                    <Dropdown.Item href='#MugClub' style={linkStyle}>Mug Club</Dropdown.Item>
                    <Dropdown.Item href='#Contact' style={linkStyle}>Contact Us</Dropdown.Item>
                    <Dropdown.Item href='#HoursAndLocation' style={linkStyle}>Hours and Location</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}







