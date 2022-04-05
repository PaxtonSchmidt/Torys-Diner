import React, { useState } from 'react';
import { Col, Container, Modal} from 'react-bootstrap';
import PhotoTile from './PhotoTile';


export default function PhotoTileArrayDesktop() {
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
                <PhotoTile class='photoTile photoTileLg photoTileBBread' showNavModal={handleShow}/>  
                <PhotoTile class='photoTile photoTileLg photoTileFront' showNavModal={handleShow}/>  
                <PhotoTile class='photoTile photoTileLg photoTileOmelet' showNavModal={handleShow}/>  
                <PhotoTile class='photoTile photoTileLg photoTileLobby' showNavModal={handleShow}/> 
            </div>

            <div className='photoTileArrayRow'>
                <PhotoTile class='photoTile photoTileLg photoTileBanner' showNavModal={handleShow}/>  
                <PhotoTile class='photoTile photoTileLg photoTileChili' showNavModal={handleShow}/>  
                <PhotoTile class='photoTile photoTileLg photoTile1year' showNavModal={handleShow}/>
                <PhotoTile class='photoTile photoTileLg photoTileBrocSoup' showNavModal={handleShow}/>  
            </div>
            
        </Container>
        </>
    )
}
