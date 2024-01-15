import React from "react";

const Buttons = ({
  handlePrevQuestion,
  handleNextQuestion,
  currentQuestionIndex,
  apiData,
}) => {
  const isLastQuestion = currentQuestionIndex === 9;
  const buttonText = isLastQuestion ? "Submit" : "Next Question";

  return (
    <div className="prev-next-btns">
      <button
        onClick={handlePrevQuestion}
        disabled={currentQuestionIndex === 0}
      >
        Previous Question
      </button>
      <button
        onClick={handleNextQuestion}
        disabled={currentQuestionIndex === apiData.length - 1}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Buttons;
