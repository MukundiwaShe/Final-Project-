import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Malaria Awareness</h1>
      <p className="about-paragraph">
        Africa, the world's second-largest continent, is rich in diverse cultures and deep history.
        It is home to vibrant wildlife and breathtaking landscapes — but it also faces real health challenges.
        <br /><br />
        One such challenge is malaria. Transmitted by infected mosquito bites, malaria is a life-threatening
        disease that is both preventable and treatable. This app uses real malaria data to inform and empower people across Africa.
      </p>

      <section className="why-section">
        <h2 className="section-heading">Why Use This App?</h2>
        <ul className="benefits-list">
          <li>✔️ Instant answers to malaria-related questions</li>
          <li>✔️ Real African malaria data</li>
          <li>✔️ Educational and awareness-focused</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
