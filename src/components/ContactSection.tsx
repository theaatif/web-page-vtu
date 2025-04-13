
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-vtu-blue">Get In Touch</h2>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Fill out the form below or contact us directly. We'll help you select the perfect project for your academic needs.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2">
            <CardContent className="pt-6">
              <div className="relative h-0 pb-[56.25%]">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLScvYrS85L5936Q38G3eigDt4yb5i7jFTeuaxnYCe7-3XGRlHA/viewform?embedded=true" 
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                >
                  Loading form...
                </iframe>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-6">Contact Us Directly</h3>
                  
                  <div className="space-y-4">
                    <a 
                      href="https://wa.me/919449163009" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 p-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                    >
                      <MessageSquare size={20} />
                      <span>Chat on WhatsApp</span>
                    </a>
                    
                    <a 
                      href="tel:+919449163009"
                      className="flex items-center justify-center gap-3 p-3 bg-vtu-blue text-white rounded-md hover:bg-blue-800 transition-colors"
                    >
                      <Phone size={20} />
                      <span>+91 94491 63009</span>
                    </a>
                    
                    <a 
                      href="mailto:info@vtuprojects.com"
                      className="flex items-center justify-center gap-3 p-3 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors"
                    >
                      <Mail size={20} />
                      <span>Email Us</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Affordable pricing compared to marketplaces</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Complete setup support included</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Ready-made projects save you time</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Custom project development available</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
