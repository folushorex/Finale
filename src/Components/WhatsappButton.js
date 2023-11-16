import React from 'react';
import Whatsapp from "../Assets/chat-removebg-preview.png";
import "../Styles/WhatsappButton.css";

const WhatsAppButton = () => {
  // Replace '1234567890' with your actual WhatsApp number and message
  const whatsappLink = `https://wa.me/+2348182848273?text=Hello,interested in our Services.`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
      <img src={Whatsapp} alt="WhatsApp Icon" />
    </a>
  );
};

export default WhatsAppButton;
