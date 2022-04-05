import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { WelcomeCardProps } from '../../Script/Interfaces/WelcomeCard';

export default function WelcomeCard(props: WelcomeCardProps) {
    return (  
        <div className='welcomeCard'>
            <div style={{height: '45%', marginTop: '15%', textAlign: 'center'}}>
                <h1 className='header' style={{marginBottom: '0px'}}>{props.header}</h1>
                <p style={{color:'#429aae', fontWeight: 'bolder'}}>{props.subHeader}</p>
                
            </div>
            <div>
                {props.button}
            </div>
        </div>
           
    );
}
