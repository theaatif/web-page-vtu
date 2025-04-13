
import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/919449163009" 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-button" 
      aria-label="Contact on WhatsApp"
    >
      <MessageSquare size={28} />
    </a>
  );
};

export default WhatsAppButton;
