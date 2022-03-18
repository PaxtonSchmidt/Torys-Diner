import React from 'react';
import GoogleMap from './Map';

export default function SubBannerLocation() {
    return (
        <div className='subBanner'>
            <div className='subBannerHalf1'>
                <GoogleMap />
            </div>
            <div className='subBannerHalf2'></div>
        </div>
    )
}