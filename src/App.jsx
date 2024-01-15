import React, { useEffect, useState } from "react";
import Header from "./Header";
import Questions from "./Questions";
import Results from "./Results";

const App = () => {
  const [data, setData] = useState();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [optionClicked, setOptionClicked] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl =
          "https://opentdb.com/api.php?amount=11&category=9&difficulty=medium&type=multiple";
        const response = await fetch(apiUrl);
        const data = await response.json();
        setData(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex
    );
    setOptionClicked(null);
  };

  const handlePrevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
    setOptionClicked(null);
  };

  const handleOptionClick = (evt, selectedOption) => {
    if (!optionClicked) {
      if (selectedOption === data[currentQuestionIndex].correct_answer) {
        setScore((prev) => prev + 1);
        evt.target.style.backgroundColor = "green";
      } else {
        evt.target.style.backgroundColor = "#FF4A4A";
        setOptionClicked(true);
      }
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setOptionClicked(null);
    setQuizFinished(false);
    // Fetch new   data
    fetchData();
  };

  const fetchData = async () => {
    try {
      const apiUrl =
        "https://opentdb.com/api.php?amount=11&category=9&difficulty=medium&type=multiple";
      const response = await fetch(apiUrl);
      const newData = await response.json();
      setData(newData.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (currentQuestionIndex === data?.length - 1 && !quizFinished) {
      setQuizFinished(true);
      setOptionClicked(null); // Reset optionClicked when currentQuestionIndex changes
    }
  }, [currentQuestionIndex, data, quizFinished]);

  return (
    <div className="main-container">
      <Header />
      {currentQuestionIndex !== data?.length - 1 ? (
        <>
          <Questions
            apiData={data}
            currentQuestionIndex={currentQuestionIndex}
            handleNextQuestion={handleNextQuestion}
            handlePrevQuestion={handlePrevQuestion}
            handleOptionClick={handleOptionClick}
          />
        </>
      ) : (
        <Results score={score} handleRestart={handleRestart} />
      )}
    </div>
  );
};

export default App;
