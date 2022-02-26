import React from 'react';
import './App.css';
import NavBar from './Nav/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './Banner/WelcomeCarousel';
import LogoBanner from './Nav/Logo';
import BannerContent from './Banner/BannerContent';
import Array from './CardArray/Array'
import Logo from './Nav/Logo';
import Menu from './Menu/Menu';




function App() {
  return (
      <div className='appStyle'>
        <NavBar /> 
        <BannerContent />  
        <div className='spacer wave'></div>      
        <Array />
        <div className='spacerLight waveLight'></div>
        <Menu />
      </div >
  );
}

export default App;
