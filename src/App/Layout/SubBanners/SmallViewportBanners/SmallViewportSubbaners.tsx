import React from 'react';
import { Container } from 'react-bootstrap';
import SubBannerLocationSm from './SubBannerLocationSm';
import SubBannerMugClubSm from './SubBannerMugClubSm';

export default function SmallViewportSubbaners() {
    return (
        <Container fluid className='allComponentsWrapper subBannerContainer'>
            <SubBannerMugClubSm />
            <SubBannerLocationSm />
        </Container>
    )
}