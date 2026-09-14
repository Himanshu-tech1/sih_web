import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import StatsCounter from '../components/StatsCounter';
import PortalCards from '../components/PortalCards';
import HowItWorks from '../components/HowItWorks';
import FeaturesShowcase from '../components/FeaturesShowcase';
import SuccessStories from '../components/SuccessStories';
import StateCTA from '../components/StateCTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import ScrollProgressBar from '../components/ScrollProgressBar';
import BackToTop from '../components/BackToTop';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Top Scroll Indicator */}
      <ScrollProgressBar />

      {/* Main Global Navigation */}
      <Header />

      {/* Main Body */}
      <main className="landing-main-content">
        <Hero />
        <StatsCounter />
        <PortalCards />
        <HowItWorks />
        <FeaturesShowcase />
        <SuccessStories />
        <StateCTA />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
};

export default LandingPage;
