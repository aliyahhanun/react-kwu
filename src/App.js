import React from 'react';
import './app.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Package from './Components/Package/Package';
import Offer from './Components/Offer/Offer';
import About from './Components/About/About';
import Review from './Components/Review/Review';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
    <Navbar />
    <Home />
    <Package />
    <Offer />
    <About />
    <Review />
    <Footer />
    </>
  );
}

export default App;
