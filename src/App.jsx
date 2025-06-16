import React from 'react';
import Navbar from './components/navbar';
import Simplify from './components/Simplify';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import StartOrganiz from './components/StartOrganiz';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar/>
      <Simplify/>
       <Features/>
      <Testimonials/>
      <StartOrganiz/>
     <Footer/>
    </>
  )
}

export default App