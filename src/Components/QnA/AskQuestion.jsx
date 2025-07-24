import React, { useState } from 'react';
import malariaData from '../../Data/malariaData.json';
import predefinedAnswers from '../../Data/predefinedAnswers.json';
import './AskQuestion.css';

export default function AskQuestion() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAsk = () => {
    const lowerCaseQuestion = question.toLowerCase();

    // 1. Try matching predefined/general questions
    const generalMatch = predefinedAnswers.find(entry =>
      lowerCaseQuestion.includes(entry.question)
    );

    if (generalMatch) {
      setAnswer(generalMatch.answer);
      return;
    }

    // 2. Try matching malaria data by country or region
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
      <h2>Ask a Malaria-Related Question</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type your question here..."
      />
      <button onClick={handleAsk}>Ask</button>
      {answer && <p className="answer">{answer}</p>}
    </div>
  );
}
