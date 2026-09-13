import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PortalCards from '../components/PortalCards';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <main className="landing-main-content">
        <Hero />
        <PortalCards />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
