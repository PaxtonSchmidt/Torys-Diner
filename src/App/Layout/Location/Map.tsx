import React from 'react';

export default function Map() {
    return (
        <div className='responsiveMap' style={{height: '100%', borderRadius: '9px 0px 0px 9px'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971.5562773555887!2d-82.43566484185747!3d8.775480249236118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa5ecd923922259%3A0xb9270b5695efe8a0!2sHotel%20Isla%20Verde!5e0!3m2!1sen!2sus!4v1646425083091!5m2!1sen!2sus" width="800" height="600"  loading="lazy"></iframe>
        </div>
    )
}