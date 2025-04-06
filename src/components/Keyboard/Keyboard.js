import React, { useEffect } from "react";
import KeyboardRow from "./KeyboardRow";

const Keyboard = ({ updateGuesses, guesses }) => {
  return (
    <div>
      <KeyboardRow
        charsStr="Q,W,E,R,T,Y,U,I,O,P"
        updateGuesses={updateGuesses}
        guesses={guesses}
      ></KeyboardRow>
      <KeyboardRow
        charsStr="A,S,D,F,G,H,J,K,L"
        updateGuesses={updateGuesses}
        guesses={guesses}
      ></KeyboardRow>
      <KeyboardRow
        charsStr="ENTER,Z,X,C,V,B,N,M,DELETE"
        updateGuesses={updateGuesses}
        guesses={guesses}
      ></KeyboardRow>
    </div>
  );
};

export default Keyboard;
