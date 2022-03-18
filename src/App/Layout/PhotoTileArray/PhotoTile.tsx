import React from 'react';
import { Image } from 'react-bootstrap';
import { PhotoTileProps } from '../../Script/Interfaces/PhotoTile';

export default function PhotoTile(props: PhotoTileProps) {
    return (
        <div className={props.class}>
            <h2 className='tileText'>{props.text}</h2>
        </div>
    )
}