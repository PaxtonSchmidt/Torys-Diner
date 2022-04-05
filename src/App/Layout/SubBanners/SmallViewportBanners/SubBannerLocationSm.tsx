import React from 'react';
import GoogleMap from '../Map';

export default function SubBannerLocationSm() {
    return( 
        <div id='Location' className='subBanner'>
            <div className='subBannerHalf2 subBannerHalf2Sm'>
                <div className='subBannerText'>
                    <h1 className='header'>Location</h1>
                    <p>Find us tucked away in the beauty of Hotel Isla Verde!</p>
                </div>
            </div>
            <div className='subBannerHalf1 subBannerHalf1Sm'>
                <GoogleMap />
            </div>
        </div>
    )
}