import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { WelcomeCardProps } from '../../Script/Interfaces/WelcomeCard';

export default function WelcomeCard(props: WelcomeCardProps) {
    return (  
        <div className='welcomeCard'>
            <div style={{height: '40%', marginTop: '15%'}}>
                <Image className='welcomeCardImg' src={props.src} />
            </div>
            <div style={{height: '60%', marginTop: '15%', textAlign: 'center'}}>
                <h1>{props.header}</h1>
                <p style={{color:'#429aae', fontWeight: 'bolder'}}>{props.subHeader}</p>
                <a  href={props.destinaton} />
            </div>
        </div>
           
    );
}
