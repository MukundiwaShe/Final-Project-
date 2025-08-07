import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-container">
      <div className="content">
        <h1 className="landing-title">Welcome to Malaria Q&A</h1>
        <p className="landing-subtitle">Your source for awareness and answers.</p>
        <Link to="/ask" className="landing-button">
          Ask a Question
        </Link>
      </div>
    </div>
  );
}
