import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PhotoTile from './PhotoTile';
import banner from '../../Img/About/banner.png';


export default function PhotoTileArrayDesktop() {
    return(
        <Container fluid className='allComponentsWrapper photoTileContainer'>
            <div className='photoTileArrayRow'>
                <PhotoTile class='photoTile photoTileLg photoTileBBread'/>  
                <PhotoTile class='photoTile photoTileLg photoTileFront'/>  
                <PhotoTile class='photoTile photoTileLg photoTileOmelet'/>  
                <PhotoTile class='photoTile photoTileLg photoTileLobby'/> 
                
                 
            </div>

            <div className='photoTileArrayRow'>
                <PhotoTile class='photoTile photoTileLg photoTileBanner'/>  
                <PhotoTile class='photoTile photoTileLg photoTileChili'/>  
                <PhotoTile class='photoTile photoTileLg photoTile1year'/>
                <PhotoTile class='photoTile photoTileLg photoTileBrocSoup'/>  
            </div>
            
        </Container>
    )
}
