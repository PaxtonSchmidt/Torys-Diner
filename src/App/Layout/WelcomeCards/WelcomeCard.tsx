import React from 'react';
import { WelcomeCardProps } from '../../Script/Interfaces/WelcomeCard';

export default function WelcomeCard(props: WelcomeCardProps) {
    return (  
        <div className='welcomeCard'>
            <div style={{height: 'fit-content', marginTop: '15%', textAlign: 'center', marginBottom: '10px'}}>
                <h1 className='header welcomeCardHeader' style={{marginBottom: '0px'}}>{props.header}</h1>
                <p style={{color:'#429aae', fontWeight: 'bolder', marginBottom: '0px'}}>{props.subHeader}</p>
                <div style={{alignContent: 'bottom'}}>
                    {props.button}
                </div>
            </div>
            
        </div>
           
    );
}
