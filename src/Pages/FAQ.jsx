import React, { useState } from "react";
import "./FAQ.css";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is malaria?",
      answer:
        "Malaria is a life-threatening disease caused by parasites transmitted through the bites of infected Anopheles mosquitoes."
    },
    {
      question: "How can I prevent malaria?",
      answer:
        "Prevention includes using insecticide-treated nets, taking antimalarial drugs, and controlling mosquito breeding sites."
    },
    {
      question: "What are the symptoms of malaria?",
      answer:
        "Common symptoms include fever, chills, headache, nausea, vomiting, and sweating. Severe cases can lead to complications."
    },
    {
      question: "Who is at risk of getting malaria?",
      answer:
        "Anyone can get malaria, but children under five, pregnant women, travelers to endemic areas, and people with weakened immune systems are at higher risk."
    },
    {
      question: "How is malaria diagnosed and treated?",
      answer:
        "Malaria is diagnosed through blood tests and treated with antimalarial medications prescribed by a healthcare provider."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-content">
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className="faq-icon">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              <div className="faq-answer">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
