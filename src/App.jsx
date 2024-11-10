import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import Faq from './components/FAQ';

function App() {


  return (
    <>
      <div style={{    
        background: `
          linear-gradient(to right, #EFDFFB 0%, #BAD7FC 100%), 
          linear-gradient(to bottom, rgba(239, 223, 251, 0.5) 0%, rgba(239, 223, 251, 0) 50%, #ffffff 100%)`,
        backgroundSize: '100% 100%',
        backgroundBlendMode: 'overlay'
      }}>
        <Navbar/>
        <Hero />
        <SectionOne/>
      </div>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <Faq/>
    </>
  );
}

export default App
