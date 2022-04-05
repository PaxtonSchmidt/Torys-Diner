import React from 'react';
import '../Styles/style.css';
import NavBarContainer from './Nav/NavBarContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerContent from './Banner/BannerContent';
import Footer from './Footer/Footer';
import WelcomeCardsContainer from './WelcomeCards/WelcomeCardsContainer';
import PhotoTileArray from './PhotoTileArray/PhotoTileArrayContainer';
import SubBannersContainer from './SubBanners/SubBannersContainer';




function App() {  
  return (
      <div className='appStyle'>
        <NavBarContainer />
        
        <BannerContent />  
        <WelcomeCardsContainer/>
        <SubBannersContainer />
        <PhotoTileArray /> 
        <Footer /> 
       
      </div >
  );
  
}

export default App;

