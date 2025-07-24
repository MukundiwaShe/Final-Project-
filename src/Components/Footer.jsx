import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Nicole Tatenda Zonke | Malaria Q&A Project</p>
      <p>
        Built with love using React | For Education & Awareness
      </p>
    </footer>
  );
}
