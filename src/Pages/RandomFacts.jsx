import React, { useState } from "react";
import facts from '../Data/malariaFacts.json';
import '../Styles/RandomFacts.css';

export default function RandomFacts() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [displayedFact, setDisplayedFact] = useState(null);

  const categories = [
    "all",
    "cause",
    "mortality",
    "vulnerable",
    "treatment",
    "region",
    "prevention",
    "symptoms",
    "diagnosis"
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setDisplayedFact(null);
  };

  const handleShowFact = () => {
    const filteredFacts =
      selectedCategory === "all"
        ? facts
        : facts.filter((fact) => fact.category === selectedCategory);

    const randomIndex = Math.floor(Math.random() * filteredFacts.length);
    setDisplayedFact(filteredFacts[randomIndex]);
  };

  return (
    <div className="facts-container">
      <h2 className="page-title">Random Malaria Facts</h2>

      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <button className="show-fact-btn" onClick={handleShowFact}>
        Show Random Fact
      </button>

      {displayedFact && (
        <div className="fact-box">
          <p>{displayedFact.fact}</p>
          <small>Category: {displayedFact.category}</small>
        </div>
      )}
    </div>
  );
}
