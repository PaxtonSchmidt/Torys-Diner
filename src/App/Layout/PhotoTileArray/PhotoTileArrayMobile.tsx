import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PhotoTile from './PhotoTile';
import banner from '../../Img/About/banner.png';


export default function PhotoTileArrayMobile() {
    return(
        <Container fluid className='allComponentsWrapper photoTileContainer'>
            <div className='photoTileArrayRow'>
                <PhotoTile class='photoTile photoTileSm photoTileBBread'/>
                <PhotoTile class='photoTile photoTileSm photoTileFront'/>    
                
            </div>
            <div className='photoTileArrayRow'>
                <PhotoTile class='photoTile photoTileSm photoTileLobby'/>  
                <PhotoTile class='photoTile photoTileSm photoTileBrocSoup'/>  
            </div>
            <div className='photoTileArrayRow'> 
                <PhotoTile class='photoTile photoTileSm photoTileOmelet'/> 
                <PhotoTile class='photoTile photoTileSm photoTileBanner'/>  
            </div>
            <div className='photoTileArrayRow'>
                <PhotoTile class='photoTile photoTileSm photoTile1year'/> 
                <PhotoTile class='photoTile photoTileSm photoTileChili'/>  
            </div>
        </Container>
    )
}
