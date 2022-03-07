import React from 'react';
import './App.css';
import NavBar from './Nav/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerContent from './Banner/BannerContent';
import Array from './CardArray/Array'
import MenuContainer from './Menu/MenuContainer';
import Footer from './Footer/Footer';
import Location from './Location/Location';
import MACContainer from './MugAndContact/MugClubAndContact';
import { Container } from 'react-bootstrap';
import WaveSpacer1 from './WaveSpacers/WaveSpacer1';
import WaveSpacer2 from './WaveSpacers/WaveSpacer2';




function App() {
  return (
      <div className='appStyle'>
        <NavBar /> 
        <BannerContent />  
        <WaveSpacer1 />
        <Array />
        <WaveSpacer2 />
        <MenuContainer />
        
        <Container>
          <div className='checkerBG shadow-lg'>
            <MACContainer />
            <Location />  
          </div>
        </Container>
      
        <Footer />
      </div >
  );
}

export default App;


 {/* <Specials /> */}