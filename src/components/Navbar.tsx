
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { 
  Drawer, 
  DrawerContent, 
  DrawerTrigger, 
  DrawerClose 
} from '@/components/ui/drawer';
import { useIsMobile } from '@/hooks/use-mobile';
import Image from '@/components/ui/image';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useIsMobile();

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image 
            src="/logo/33decec9-3688-4cca-8ddf-a808f71a2104.png" 
            alt="VTU Projects Logo" 
            width={50} 
            height={50} 
            className="object-contain"
          />
          <span className="text-xl font-bold text-vtu-blue hidden md:inline">VTU PROJECTS</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-gray-700 hover:text-vtu-blue transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <a 
          href="https://wa.me/919449163009" 
          target="_blank"
          rel="noopener noreferrer" 
          className="hidden md:flex hover-scale"
        >
          <Button variant="outline" className="flex items-center gap-2">
            <MessageSquare size={18} />
            <span>Chat on WhatsApp</span>
          </Button>
        </a>
        
        {/* Mobile menu button - Now connected to a functional drawer */}
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger asChild>
            <Button variant="ghost" className="md:hidden" size="sm" aria-label="Open Menu">
              <Menu className="w-6 h-6" />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="pt-6 pb-8">
            <div className="flex flex-col items-center space-y-4">
              {navLinks.map((link) => (
                <DrawerClose asChild key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-gray-700 hover:text-vtu-blue transition-colors text-lg py-2"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {link.label}
                  </a>
                </DrawerClose>
              ))}
              <DrawerClose asChild>
                <a href="tel:+919449163009" className="mt-4">
                  <Button className="flex items-center gap-2">
                    <Phone size={18} />
                    <span>+91 94491 63009</span>
                  </Button>
                </a>
              </DrawerClose>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

export default Navbar;
