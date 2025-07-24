import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"; 

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1 className="landing-title">Welcome to Malaria Q&A</h1>
      <p className="landing-subtitle">Get answers to your malaria-related questions.</p>

      <Link to="/ask" className="landing-button">
        Ask a Question
      </Link>

      </div>
    
  );
};

export default LandingPage;
