import React from 'react';
import { Container } from 'react-bootstrap';
import SubBannerLocation from './SubBannerLocation';
import SubBanner from './SubBannerLocation';
import SubBannerMugClub from './SubBannerMugClub';

export default function SubBannersContainer() {
    return (
        <Container fluid className='allComponentsWrapper'>
            <SubBannerMugClub />
            <SubBannerLocation />
        </Container>
    )
}