import React from 'react';
import './App.css';
import  Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Lorem from './Components/Lorem/Lorem';
import PalaceOfCeremonies from './Components/PalaceOfCeremonies/PalaceOfCeremonies';
import Artists from './Components/Artists/Artists';
import Clothes from './Components/Clothes/Clothes';
import Invitation from './Components/Invitation/Invitation';
import Instagram from './Components/Instagram/Instagram';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Services />
      <Lorem />
      <PalaceOfCeremonies />
      <Artists />
      <Clothes />
      <Invitation />
      <Instagram />
      <Contact />
    </div>
  );
}

export default App;
