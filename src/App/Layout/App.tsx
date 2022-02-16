import React from 'react';
import './App.css';
import About from './About';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './welcomeCarousel';

function App() {
  return (
      <>
        <NavBar />
        <Carousel />
      </>
  );
}

export default App;
