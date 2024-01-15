import React, { useState, useEffect } from "react";

const shuffleArray = (array) => {
  // Create a copy of the array to avoid modifying the original
  const shuffledArray = [...array];

  // Perform Fisher-Yates Shuffle
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};

const Options = ({ apiData, currentQuestionIndex, handleOptionClick }) => {
  // Ensure that apiData is an array and has at least one item
  if (!Array.isArray(apiData) || apiData.length === 0) {
    return <div>No data available</div>;
  }
  const [shuffledOptions, setShuffledOptions] = useState([]);

  const { correct_answer, incorrect_answers } = apiData[currentQuestionIndex];
  const optionsArray = [correct_answer, ...incorrect_answers];

  useEffect(() => {
    setShuffledOptions(shuffleArray(optionsArray));
  }, [apiData, currentQuestionIndex]);

  // const [optionClicked, setOptionClicked] = useState(null);

  // useEffect(() => {
  //   setOptionClicked(null); // Reset optionClicked when currentQuestionIndex changes
  // }, [currentQuestionIndex]);

  return (
    <div>
      {shuffledOptions.map((option) => (
        <div className="options-container" key={option}>
          <button
            type="button"
            key={option}
            onClick={(evt) => handleOptionClick(evt, option)}
          >
            {option}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Options;
