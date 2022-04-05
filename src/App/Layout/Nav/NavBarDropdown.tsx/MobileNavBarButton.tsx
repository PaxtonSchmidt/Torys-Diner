import React from 'react';
import { MobileNavbarProps } from '../../../Script/Interfaces/MobileNavbarProps';
import list from '../../../Img/Icons/list.svg';

export default function MobileNavBarButton(props: MobileNavbarProps) {
    return (
        <button onClick={props.onClick} className='mobileNavbarButton shadow-sm'>
            <img src={list} />
        </button>
    )
}