import React, { useState } from "react";
import Buttons from "./Buttons";
import Options from "./Options";

const Questions = ({
  apiData,
  currentQuestionIndex,
  handleNextQuestion,
  handlePrevQuestion,
  handleOptionClick,
}) => {
  if (!apiData || apiData.length === 0) {
    // Data is still loading
    return <p>Loading...</p>;
  }

  const currentQuestionData = apiData[currentQuestionIndex];
  return (
    <>
      <h3 className="questions">
        {currentQuestionIndex + 1}. {apiData[currentQuestionIndex].question}
      </h3>
      <Options
        apiData={apiData}
        currentQuestionIndex={currentQuestionIndex}
        handleOptionClick={handleOptionClick}
      />
      <Buttons
        handlePrevQuestion={handlePrevQuestion}
        handleNextQuestion={handleNextQuestion}
        currentQuestionIndex={currentQuestionIndex}
        apiData={apiData}
      />
    </>
  );
};

export default Questions;
