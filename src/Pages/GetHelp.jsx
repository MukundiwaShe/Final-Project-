import React from 'react';
import './GetHelp.css';

function GetHelp() {
  return (
    <div className="get-help-container">
      <h1 className="get-help-title">Get Help</h1>
      <p className="get-help-description">
        If you or someone you know is experiencing symptoms of malaria or needs support, here are resources that can help.
      </p>

      <section className="help-section">
        <h2>📞 Emergency Contacts</h2>
        <ul>
          <li>Ministry of Health Helpline: <strong>0800 123 456</strong></li>
          <li>National Malaria Hotline: <strong>0800 987 654</strong></li>
        </ul>
      </section>

      <section className="help-section">
        <h2>🏥 Nearest Health Services</h2>
        <ul>
          <li>Visit your local clinic or hospital</li>
          <li>Look for mobile malaria testing centers in your area</li>
          <li>Contact community health workers for free malaria testing</li>
        </ul>
      </section>

      <section className="help-section">
        <h2>🌐 Online Support & Resources</h2>
        <ul>
          <li><a href="https://www.who.int/health-topics/malaria" target="_blank" rel="noreferrer">WHO Malaria Resource</a></li>
          <li><a href="https://www.unicef.org" target="_blank" rel="noreferrer">UNICEF Health Programs</a></li>
          <li><a href="https://www.endmalaria.org" target="_blank" rel="noreferrer">RBM Partnership to End Malaria</a></li>
        </ul>
      </section>
    </div>
  );
}

export default GetHelp;
