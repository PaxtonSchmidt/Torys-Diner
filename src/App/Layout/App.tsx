import React from 'react';
import '../Styles/style.css';
import NavBarContainer from './Nav/NavBarContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerContent from './Banner/BannerContent';
import Footer from './Footer/Footer';
import Location from './SubBanners/Location';
import MugClubContainer from './SubBanners/MugClub';
import WelcomeCardsContainer from './WelcomeCards/WelcomeCardsContainer';
import getViewportSize from '../Script/GetViewportWidth';
import PhotoTileArray from './PhotoTileArray/PhotoTileArrayContainer';
import SubBannersContainer from './SubBanners/SubBannersContainer';




function App() {  
  return (
      <div className='appStyle'>
        <NavBarContainer />
        
        <BannerContent />  
        <WelcomeCardsContainer/>
        <PhotoTileArray /> 
        <SubBannersContainer />
        <Footer /> 
       
      </div >
  );
  
}

export default App;

