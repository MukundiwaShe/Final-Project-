import React, { useState, useEffect } from "react";
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
    // You can reset displayedFact here or keep it
    setDisplayedFact(null);
  };

  const handleShowFact = () => {
    const filteredFacts =
      selectedCategory === "all"
        ? facts
        : facts.filter((fact) => fact.category === selectedCategory);

    if (filteredFacts.length === 0) {
      setDisplayedFact({ fact: "No facts available for this category.", category: selectedCategory });
      return;
    }

    const randomIndex = Math.floor(Math.random() * filteredFacts.length);
    setDisplayedFact(filteredFacts[randomIndex]);
  };

  // Show a random fact on component mount and whenever category changes
  useEffect(() => {
    handleShowFact();
  }, [selectedCategory]);

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

    

      {displayedFact && (
        <div className="fact-box">
          <p>{displayedFact.fact}</p>
          <small>Category: {displayedFact.category}</small>
        </div>
      )}
    </div>
  );
}
