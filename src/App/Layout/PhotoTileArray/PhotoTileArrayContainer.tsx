import React, { useEffect, useState } from 'react';
import PhotoTileArraySm from './PhotoTileArrayMobile';
import PhotoTileArrayLg from './PhotoTileArrayDesktop';
import getViewportWidth from '../../Script/GetViewportWidth';

export default function PhotoTileArray() {
    let viewportWidth: number = getViewportWidth();
    const [width, setWidth] = useState(viewportWidth);
    let size: string = '';
        if (viewportWidth <= 992) {
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
    
    
    
    return (size === 'smallViewport') ? <PhotoTileArraySm /> : <PhotoTileArrayLg />;    
}
