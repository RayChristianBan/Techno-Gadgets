import React from 'react';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Cards from './components/Cards';
import Devices from './components/Devices';
import Footer from './components/Footer';
import Letter from './components/Letter';
import Information from './components/Information';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Hero />
      <Cards />
      <Information />
      <Devices />
      <Footer />
      <Letter />
    </div>
  );
}

export default App;
