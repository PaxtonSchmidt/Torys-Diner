import React, { useState } from 'react';
import {Container, Modal} from 'react-bootstrap';
import PhotoTile from './PhotoTile';


export default function PhotoTileArrayMobile() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(
    <>
        <Modal show={show} onHide={handleClose} size='lg' style={{width: '100%', backgroundColor: 'rgba(255, 127, 17, 0.5)'}} centered>
            <Modal.Body style={{border: '3px solid #429aae', borderRadius: '4px', textAlign: 'center'}}>
                <h1 style={{color: '#429aae',fontFamily: 'Fredoka, Geneva, Tahoma, sans-serif'}}>Would you like to go to our Facebook page?</h1>
                <button className='modalButton' style={{cursor: 'pointer'}}>
                    <a href='https://www.facebook.com/Torys-Diner-105878168253164' style={{height: '100%', color: '#429aae'}}>
                        Go!
                    </a>
                </button>
                <button className='modalButton' style={{cursor: 'pointer', marginLeft: '10px'}} onClick={handleClose}>Stay</button>
            </Modal.Body>
        </Modal>
        
        <Container fluid className='allComponentsWrapper photoTileContainer'>
            <div className='photoTileArrayRow'>
                <PhotoTile class='photoTile photoTileSm photoTileBBread' showNavModal={handleShow}/>
                <PhotoTile class='photoTile photoTileSm photoTileFront' showNavModal={handleShow}/>    
                
            </div>
            <div className='photoTileArrayRow'>
                <PhotoTile class='photoTile photoTileSm photoTileLobby' showNavModal={handleShow}/>  
                <PhotoTile class='photoTile photoTileSm photoTileBrocSoup' showNavModal={handleShow}/>  
            </div>
            <div className='photoTileArrayRow'> 
                <PhotoTile class='photoTile photoTileSm photoTileOmelet' showNavModal={handleShow}/> 
                <PhotoTile class='photoTile photoTileSm photoTileBanner' showNavModal={handleShow}/>  
            </div>
            <div className='photoTileArrayRow'>
                <PhotoTile class='photoTile photoTileSm photoTile1year' showNavModal={handleShow}/> 
                <PhotoTile class='photoTile photoTileSm photoTileChili' showNavModal={handleShow}/>  
            </div>
        </Container>
    </>
    )
}
