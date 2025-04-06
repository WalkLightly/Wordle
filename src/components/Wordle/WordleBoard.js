import React, { useEffect } from "react";
import WordleBoardRow from "./WordleBoardRow";

const WordleBoard = ({ guesses }) => {
  return (
    <>
      {guesses != undefined && (
        <>
          <WordleBoardRow guess={guesses["guesses"][0]}></WordleBoardRow>
          <WordleBoardRow guess={guesses["guesses"][1]}></WordleBoardRow>
          <WordleBoardRow guess={guesses["guesses"][2]}></WordleBoardRow>
          <WordleBoardRow guess={guesses["guesses"][3]}></WordleBoardRow>
          <WordleBoardRow guess={guesses["guesses"][4]}></WordleBoardRow>
          <WordleBoardRow guess={guesses["guesses"][5]}></WordleBoardRow>
        </>
      )}
    </>
  );
};

export default WordleBoard;
