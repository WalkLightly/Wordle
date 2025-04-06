import React, { useState, useEffect } from "react";

const KeyboardKey = ({ guesses, updateGuesses, letter }) => {
  const colors = {
    correct: "rgb(67 181, 58)",
    partial: "rgb(207 183 75)",
    incorrect: "rgb(122 120 123)",
    unused: "rgb(212 209 219)",
    "": "white",
  };
  //   useEffect(() => {
  //     console.log(guesses);
  //   }, [guesses]);

  const updateGuess = () => {
    updateGuesses(letter);
  };

  const getKeyStatus = () => {
    let color = "unused";
    if (guesses !== undefined) {
      for (let i = 0; i < guesses.length; i++) {
        if (guesses[i] !== undefined) {
          for (let j = 0; j < guesses[i].length; j++) {
            if (
              guesses[i][j].status !== "" &&
              guesses[i][j].letter === letter
            ) {
              if (color !== "correct") {
                color = guesses[i][j].status;
              }
            }
          }
        }
      }
    }

    return colors[color];
  };

  return (
    <>
      {guesses !== undefined && (
        <div
          onClick={updateGuess}
          style={{
            borderRadius: "5px",
            backgroundColor: getKeyStatus(),
            height: "60px",
            width: letter === "DELETE" || letter === "ENTER" ? "66px" : "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "15px",
          }}
        >
          {letter}
        </div>
      )}
    </>
  );
};

export default KeyboardKey;
