import React from 'react';
import '../Styles/style.css';
import NavBar from './Nav/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerContent from './Banner/BannerContent';
import Footer from './Footer/Footer';
import Location from './Location/Location';
import MugClubContainer from './MugAndContact/MugClub';
import WelcomeCardsContainer from './WelcomeCards/WelcomeCardsContainer';
import getViewportSize from '../Script/GetViewportWidth';
import PhotoTileArray from './PhotoTileArray/PhotoTileArrayContainer';




function App() {  
  return (
      <div className='appStyle'>
        <NavBar /> 
        <BannerContent />  
        <WelcomeCardsContainer/>
        <PhotoTileArray />
        <MugClubContainer />
        <Location />  
        <Footer />
      </div >
  );
  
}

export default App;

