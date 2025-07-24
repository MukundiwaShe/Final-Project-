import React from 'react';
import './FAQ.css';

function FAQ() {
  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>

      <div className="faq-item">
        <h3>🦟 What causes malaria?</h3>
        <p>Malaria is caused by Plasmodium parasites, transmitted through the bite of infected female Anopheles mosquitoes.</p>
      </div>

      <div className="faq-item">
        <h3>🌍 Where is malaria most common?</h3>
        <p>Malaria is most common in sub-Saharan Africa, but also affects parts of Asia and South America.</p>
      </div>

      <div className="faq-item">
        <h3>💉 Can malaria be prevented?</h3>
        <p>Yes! Prevention includes using mosquito nets, repellents, insecticides, and taking antimalarial medication when traveling.</p>
      </div>

      <div className="faq-item">
        <h3>🤒 What are the symptoms of malaria?</h3>
        <p>Common symptoms include fever, chills, headache, nausea, vomiting, and fatigue. Severe cases can cause organ failure or death.</p>
      </div>

      <div className="faq-item">
        <h3>🩺 How is malaria treated?</h3>
        <p>Malaria is treated with antimalarial medications such as artemisinin-based combination therapies (ACTs). Early diagnosis is crucial.</p>
      </div>

      <div className="faq-item">
        <h3>📊 Is this app based on real malaria data?</h3>
        <p>Yes, the Q&A explorer uses real malaria data from trusted sources like WHO and African health datasets.</p>
      </div>
    </div>
  );
}

export default FAQ;
