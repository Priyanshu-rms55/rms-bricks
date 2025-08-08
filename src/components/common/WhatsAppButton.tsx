import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = '919934961155';
  const message = 'Hi RMS Construction, I am interested in your services. Please provide more information.';
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-40 w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center animate-bounce-slow"
      aria-label="Contact us on WhatsApp"
    >
      <MessageSquare size={24} />
      
      {/* Pulse Animation */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
    </a>
  );
};

export default WhatsAppButton;