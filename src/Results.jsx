import React from "react";

const Results = ({ score, handleRestart }) => {
  return (
    <div>
      <h2>You scored: {score}</h2>
      <button
        style={{
          padding: "10px 30px",
          cursor: "pointer",
          backgroundColor: "#fff",
          borderRadius: "20px",
          fontSize: "1em",
          fontWeight: "bold",
        }}
        onClick={handleRestart}
      >
        Restart
      </button>
    </div>
  );
};

export default Results;
