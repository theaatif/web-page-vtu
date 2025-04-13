
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import ReviewsSection from '@/components/ReviewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
