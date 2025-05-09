
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import GallerySection from '../components/GallerySection';
import FollowSection from '../components/FollowSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import SocialMediaSlideshow from '../components/SocialMediaSlideshow';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <SocialMediaSlideshow />
        <AboutSection />
        <GallerySection />
        <FollowSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
