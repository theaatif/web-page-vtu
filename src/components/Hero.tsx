
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="py-20 bg-gradient-to-br from-blue-50 to-sky-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-vtu-blue leading-tight">
              Affordable Academic Projects for College Students
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Get ready-made projects with setup support at a fraction of the market price.
              Perfect for final year presentations and assignments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects">
                <Button className="bg-vtu-blue hover:bg-blue-800 text-lg px-8 py-6">
                  Explore Projects
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="border-vtu-blue text-vtu-blue hover:bg-blue-50 text-lg px-8 py-6">
                  Get in Touch
                </Button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80" 
              alt="Student working on programming project" 
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
