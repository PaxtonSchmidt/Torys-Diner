import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PhotoTile from './PhotoTile';
import banner from '../../Img/About/banner.png';


export default function PhotoTileArraySm() {
    return(
        <Container fluid className='allComponentsWrapper'>
            <div className='photoTileArrayRow'>
                <PhotoTile src={banner} title='Inside of Torys Diner' text='Beautiful Morning!' class='photoTileSm'/>  
                <PhotoTile src={banner} title='Inside of Torys Diner' text='Beautiful Morning!' class='photoTileSm'/>  
            </div>
            <div className='photoTileArrayRow'>
                <PhotoTile src={banner} title='Inside of Torys Diner' text='Beautiful Morning!' class='photoTileSm'/>  
                <PhotoTile src={banner} title='Inside of Torys Diner' text='Beautiful Morning!' class='photoTileSm'/>  
            </div>
            <div className='photoTileArrayRow'>
                <PhotoTile src={banner} title='Inside of Torys Diner' text='Beautiful Morning!' class='photoTileSm'/>  
                <PhotoTile src={banner} title='Inside of Torys Diner' text='Beautiful Morning!' class='photoTileSm'/>  
            </div>
            <div className='photoTileArrayRow'>
                <PhotoTile src={banner} title='Inside of Torys Diner' text='Beautiful Morning!' class='photoTileSm'/>  
                <PhotoTile src={banner} title='Inside of Torys Diner' text='Beautiful Morning!' class='photoTileSm'/>  
            </div>
            <div className='photoTileArrayRow'>
                <PhotoTile src={banner} title='Inside of Torys Diner' text='Beautiful Morning!' class='photoTileSm'/>  
                <PhotoTile src={banner} title='Inside of Torys Diner' text='Beautiful Morning!' class='photoTileSm'/>  
            </div>
        </Container>
    )
}
