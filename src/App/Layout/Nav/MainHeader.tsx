import React from 'react';
import { HeaderProps } from '../../Script/Interfaces/Header';


export default function MainHeader(props: HeaderProps) {
    return (
        <div className={props.class}>
            <span className='headerBlue'>T</span>
            <span className='headerBlue'>O</span>
            <span className='headerBlue'>R</span>
            <span className='headerBlue'>Y</span>
            <span className='headerBlue'>'</span>
            <span className='headerBlue'>S</span>

            <span className='headerPink' style={{marginLeft: '1vw'}}>D</span>
            <span className='headerPink' >I</span>
            <span className='headerPink' >N</span>
            <span className='headerPink' >E</span>
            <span className='headerPink' >R</span>
        </div>
        )
    }
