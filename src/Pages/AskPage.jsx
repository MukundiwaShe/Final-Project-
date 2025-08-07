// src/Pages/AskPage.jsx
import React from 'react';
import AskQuestion from '../Components/QnA/AskQuestion';
import './AskPage.css';

export default function AskPage() {
  return (
    <div className="ask-page">
      <h2 className="ask-title">Ask a Malaria-Related Question</h2>
      <div className="ask-box">
        <AskQuestion />
      </div>
    </div>
  );
}
