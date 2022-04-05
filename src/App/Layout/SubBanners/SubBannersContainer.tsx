import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import getViewportWidth from '../../Script/GetViewportWidth';
import LargeViewportSubbaners from './LargeViewportBanners/LargeViewportSubbaners';
import SmallViewportSubbaners from './SmallViewportBanners/SmallViewportSubbaners';

export default function SubBannersContainer() {
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
    
    return (size === 'smallViewport') ? <SmallViewportSubbaners /> : <LargeViewportSubbaners />
                            
}