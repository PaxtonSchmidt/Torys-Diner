import React, { useEffect, useState } from 'react';
import getViewportWidth from '../../Script/GetViewportWidth';
import WelcomeCarouselLg from './WelcomeCarouselLg';
import WelcomeCarouselSm from './WelcomeCarouselSm';

export default function CarouselContainer() {
    let viewportWidth: number = getViewportWidth();
    const [width, setWidth] = useState(viewportWidth);
    let size: string = '';
        if (viewportWidth <= 768) {
            size = 'smallViewport';
        } else {
            size = 'bigViewport';
        }
        
    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        
        function listener() {
            clearTimeout(timeout);
            timeout = setTimeout(() => setWidth(getViewportWidth()), 50); //responsiveness is inversely related to performance, the higher this number is, the more the function
        };
        window.addEventListener('resize', listener);

        return (() => {
            window.removeEventListener('resize', listener)
        })
    }, [])
    
    return (size === 'smallViewport') ? <WelcomeCarouselSm /> : <WelcomeCarouselLg />;    
}