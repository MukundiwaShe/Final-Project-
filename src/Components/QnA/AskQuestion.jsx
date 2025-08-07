// src/Components/QnA/AskQuestion.jsx
import React, { useState } from 'react';
import malariaData from '../../Data/malariaData.json';
import predefinedAnswers from '../../Data/predefinedAnswers.json';
import Fuse from 'fuse.js';
import './AskQuestion.css';

export default function AskQuestion() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  // Fuse.js setup for fuzzy matching predefined questions
  const fuse = new Fuse(predefinedAnswers, {
    keys: ['question'],
    threshold: 0.4, // controls how close the match has to be (lower = stricter)
  });

  const handleAsk = () => {
    const lowerCaseQuestion = question.toLowerCase();

    // 🔍 Use Fuse.js to search for closest match
    const result = fuse.search(lowerCaseQuestion);

    if (result.length > 0) {
      setAnswer(result[0].item.answer);
      return;
    }

    // 🔍 Fallback: check in malaria data
    const match = malariaData.find(entry =>
      lowerCaseQuestion.includes(entry.country?.toLowerCase()) ||
      lowerCaseQuestion.includes(entry.region?.toLowerCase())
    );

    if (match) {
      setAnswer(`In ${match.year}, ${match.country} had ${match.cases} malaria cases.`);
    } else {
      setAnswer("Sorry, I couldn't find an answer. Try asking differently.");
    }
  };

  return (
    <div className="ask-question-container">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type your question..."
      />
      <button onClick={handleAsk}>Ask</button>
      {answer && <p className="answer">{answer}</p>}
    </div>
  );
}
