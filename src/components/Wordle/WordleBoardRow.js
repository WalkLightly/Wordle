import React, { useEffect } from "react";
import WordleBoardLetter from "./WordleBoardLetter";

const WordleBoardRow = (props) => {
  const { guess, row } = props;

  return (
    <>
      {guess !== undefined && (
        <div style={{ display: "flex", gap: "5px" }}>
          <WordleBoardLetter letter={guess[0]}></WordleBoardLetter>
          <WordleBoardLetter letter={guess[1]}></WordleBoardLetter>
          <WordleBoardLetter letter={guess[2]}></WordleBoardLetter>
          <WordleBoardLetter letter={guess[3]}></WordleBoardLetter>
          <WordleBoardLetter letter={guess[4]}></WordleBoardLetter>
        </div>
      )}
    </>
  );
};

export default WordleBoardRow;
