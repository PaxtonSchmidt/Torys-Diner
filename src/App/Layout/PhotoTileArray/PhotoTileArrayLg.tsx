import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PhotoTile from './PhotoTile';
import banner from '../../Img/About/banner.png';


export default function PhotoTileArrayLg() {
    return(
        <Container fluid className='allComponentsWrapper'>
            <div className='photoTileArrayRow'>
                <PhotoTile src={banner} title='Inside of Torys Diner' text='Beautiful Morning!' class='photoTileLg'/>  
                <PhotoTile src={banner} title='Inside of Torys Diner' text='Beautiful Morning!' class='photoTileLg'/>  
                <PhotoTile src={banner} title='Inside of Torys Diner' text='Beautiful Morning!' class='photoTileLg'/>  
                <PhotoTile src={banner} title='Inside of Torys Diner' text='Beautiful Morning!' class='photoTileLg'/>  
                <PhotoTile src={banner} title='Inside of Torys Diner' text='Beautiful Morning!' class='photoTileLg'/>  
            </div>

            <div className='photoTileArrayRow'>
                <PhotoTile src={banner} title='Inside of Torys Diner' text='Beautiful Morning!' class='photoTileLg'/>  
                <PhotoTile src={banner} title='Inside of Torys Diner' text='Beautiful Morning!' class='photoTileLg'/>  
                <PhotoTile src={banner} title='Inside of Torys Diner' text='Beautiful Morning!' class='photoTileLg'/>  
                <PhotoTile src={banner} title='Inside of Torys Diner' text='Beautiful Morning!' class='photoTileLg'/>  
                <PhotoTile src={banner} title='Inside of Torys Diner' text='Beautiful Morning!' class='photoTileLg'/>  
            </div>
            
        </Container>
    )
}
