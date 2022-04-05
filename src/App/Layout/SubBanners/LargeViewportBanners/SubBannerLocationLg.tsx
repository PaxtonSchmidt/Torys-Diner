import React from 'react';
import GoogleMap from '../Map';

export default function SubBannerLocationLg() {
    return (
        <div id='Location' className='subBanner'>
            <div className='subBannerHalf1 subBannerHalf1Lg'>
                <GoogleMap />
            </div>
            <div className='subBannerHalf2 subBannerHalf2Lg'>
                <span className='subBannerText'>
                    <h1 className='header'>Location</h1>
                    <p >Find us tucked away in the beauty of Hotel Isla Verde!</p>
                </span>
            </div>
        </div>
    )
}