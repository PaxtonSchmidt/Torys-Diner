import React from 'react';
import { Container } from 'react-bootstrap';
import SubBannerLocationLg from './SubBannerLocationLg';
import SubBannerMugClubLg from './SubBannerMugClubLg';

export default function LargeViewportSubbaners() {
    return (
        <Container fluid className='allComponentsWrapper subBannerContainer'>
            <SubBannerMugClubLg />
            <SubBannerLocationLg />
        </Container>
    )
}