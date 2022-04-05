import React from 'react';
import { Container } from 'react-bootstrap';
import SubBannerLocation from '../LargeViewportBanners/SubBannerLocationLg';
import SubBannerMugClub from '../LargeViewportBanners/SubBannerMugClubLg';
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