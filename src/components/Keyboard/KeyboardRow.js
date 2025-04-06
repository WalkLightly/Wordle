import React, { useState, useEffect } from "react";
import KeyboardKey from "./KeyboardKey";

const KeyboardRow = ({ guesses, charsStr, updateGuesses }) => {
  const chars = charsStr.split(",");

  return (
    <>
      {guesses !== undefined && (
        <div
          style={{
            display: "flex",
            gap: "5px",
            justifyContent: "center",
            marginTop: "5px",
          }}
        >
          {chars.map((char) => (
            <div key={char}>
              <KeyboardKey
                guesses={guesses}
                updateGuesses={updateGuesses}
                letter={char}
              ></KeyboardKey>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default KeyboardRow;
