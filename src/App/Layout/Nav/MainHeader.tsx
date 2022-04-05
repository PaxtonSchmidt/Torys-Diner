import React from 'react';
import { HeaderProps } from '../../Script/Interfaces/Header';


export default function MainHeader(props: HeaderProps) {
    return (
        <div className={props.class}>
            <span className='headerLetter'>T</span>
            <span className='headerLetter'>O</span>
            <span className='headerLetter'>R</span>
            <span className='headerLetter'>Y</span>
            <span className='headerLetter'>'</span>
            <span className='headerLetter'>S</span>

            <span className='headerLetter' style={{marginLeft: '1vw'}}>D</span>
            <span className='headerLetter' >I</span>
            <span className='headerLetter' >N</span>
            <span className='headerLetter' >E</span>
            <span className='headerLetter' >R</span>
        </div>
        )
    }
