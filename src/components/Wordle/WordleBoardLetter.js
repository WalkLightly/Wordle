import React, { useEffect } from "react";

const WordleBoardLetter = ({ letter }) => {
  const colors = {
    correct: "rgb(67 181, 58)",
    partial: "rgb(207 183 75)",
    incorrect: "rgb(122 120 123)",
    unused: "rgb(212 209 219)",
    "": "white",
  };

  return (
    <div
      style={{
        border: "2px solid gray",
        borderRadius: "5px",
        backgroundColor: letter !== undefined ? colors[letter.status] : "white",
        width: "70px",
        height: "70px",
        fontSize: "45px",
        color: letter !== undefined ? "black" : "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {letter != undefined && letter.letter}
    </div>
  );
};

export default WordleBoardLetter;
