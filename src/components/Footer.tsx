
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-white">VTU</span>
              <span className="text-2xl font-bold text-vtu-lightBlue">PROJECTS</span>
            </div>
            <p className="mb-4">
              Providing affordable academic projects with complete setup support for college students.
            </p>
            <p>
              <a href="tel:+919449163009" className="hover:text-white transition-colors">
                +91 94491 63009
              </a>
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Project Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">AI/ML Projects</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Creative Solutions</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} VTU PROJECTS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
