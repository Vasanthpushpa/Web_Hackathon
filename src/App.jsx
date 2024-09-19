import { useState } from 'react';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPageComponent from './Components/landingPageComponent';
import NavBarComponent from './Components/navBarComponent';
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <React.Fragment>
      {/* Navigation bar */}
      <NavBarComponent />

      {/* Landing page */}
      <LandingPageComponent />

   
    </React.Fragment>
  );
}

export default App;
