import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Keyboard from "./components/Keyboard/Keyboard";
import WordleBoard from "./components/Wordle/WordleBoard";

function App() {
  const [word, setWord] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [guessCount, setGuessCount] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [wordMap, setWordMap] = useState({});
  const [showNewGame, setShowNewGame] = useState(false);

  const incorrect = "incorrect";
  const correct = "correct";
  const partial = "partial";

  useEffect(() => {
    getWord();
    initGuessValues();
  }, []);

  const resetBoard = () => {
    setGuessCount(0);
    setCurrentGuess("");
  };

  const resetGame = () => {
    setShowNewGame(false);
    resetBoard();
    initGuessValues();
    getWord();
  };

  const getWord = () => {
    fetch("../words.txt")
      .then((r) => r.text())
      .then((text) => {
        const words = text.split("\n");
        const index = Math.floor(Math.random() * words.length);
        console.log(words[index]);
        setWord(words[index].toUpperCase());
        //setWord('APPLE')

        let wordsCount = {};
        //let tempWord = 'APPLE'

        let tempWord = words[index].toUpperCase();

        for (let i = 0; i < 5; i++) {
          if (wordsCount[tempWord[i]] !== undefined) {
            wordsCount[tempWord[i]]++;
          } else {
            wordsCount[tempWord[i]] = 1;
          }
        }

        setWordMap(wordsCount);
      });
  };

  const validateGuess = () => {
    let tCounts = { ...wordMap };

    let tempGuesses = guesses;
    let tempGuess = [];
    console.log(currentGuess);
    for (let i = 0; i < 5; i++) {
      const guess = currentGuess[i];

      if (guess !== word[i]) {
        if (word.indexOf(guess) > -1) {
          if (tCounts[guess] > 0) {
            tCounts[guess]--;
            tempGuess.push({ letter: guess, status: partial });
          } else {
            tempGuess.push({ letter: guess, status: incorrect });
          }
        } else {
          tempGuess.push({ letter: guess, status: incorrect });
        }
      } else {
        tempGuess.push({ letter: guess, status: correct });

        if (tCounts[guess] > 0) {
          tCounts[guess]--;
        } else {
          for (let j = 0; j < tempGuess.length; j++) {
            if (
              tempGuess[j].status === partial &&
              tempGuess[j].letter === guess
            ) {
              tempGuess[j].status = incorrect;
              break;
            }
          }
        }
      }
    }

    tempGuesses[guessCount] = tempGuess;
    console.log(tempGuesses);
    setGuesses(tempGuesses);
    setGuessCount(guessCount + 1);

    if (currentGuess === word || guessCount === 5) {
      setShowNewGame(true);
    }
    setCurrentGuess("");
  };

  const initGuessValues = () => {
    let localGuesses = [];

    for (let i = 0; i < 6; i++) {
      localGuesses.push([
        { letter: "", status: "" },
        { letter: "", status: "" },
        { letter: "", status: "" },
        { letter: "", status: "" },
        { letter: "", status: "" },
      ]);
    }
    setGuesses(localGuesses);
  };

  const updateGuesses = (letter) => {
    if (letter === "ENTER") {
      if (currentGuess.length === 5) {
        validateGuess();
      }
    } else if (letter !== "DELETE") {
      if (currentGuess.length < 5) {
        updateGuess(letter, currentGuess);
      }
    } else {
      if (currentGuess.length > 0) {
        let newGuess = currentGuess.substring(0, currentGuess.length - 1);
        updateGuess("", newGuess);
      }
    }
  };

  const updateGuess = (letter, guess) => {
    let tempGuesses = guesses;
    let tCurrGuess = guess + letter;
    let tempGuessObj = tempGuesses[guessCount];
    for (let i = 0; i < 5; i++) {
      if (i < tCurrGuess.length) {
        tempGuessObj[i] = { letter: tCurrGuess[i], status: "" };
      } else {
        tempGuessObj[i] = { letter: "", status: "" };
      }
    }

    tempGuesses[guessCount] = tempGuessObj;
    setGuesses(tempGuesses);
    setCurrentGuess(tCurrGuess);
  };

  return (
    <>
      {guesses.length > 0 && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2>WORDLE</h2>
          <hr style={{ width: "98vw" }} />
          <div
            style={{
              marginBottom: "15px",
              height: "fit-content",
              width: "fit-content",
              marginTop: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {guesses !== undefined && <WordleBoard guesses={{ guesses }} />}
          </div>
          {!showNewGame && (
            <Keyboard guesses={guesses} updateGuesses={updateGuesses} />
          )}
          {showNewGame && <h1>The word was: {word}</h1>}
          {showNewGame && (
            <Button variant="contained" onClick={resetGame}>
              NEW GAME
            </Button>
          )}
        </div>
      )}
    </>
  );
}

export default App;
