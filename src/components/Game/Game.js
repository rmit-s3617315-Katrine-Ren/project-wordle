import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);
  const [status, setStatus] = React.useState("running");

  function handleResult(guess) {
    const nextResult = {
      value: guess,
      id: crypto.randomUUID(),
    };
    const nextResults = [...results, nextResult];

    setResults(nextResults);

    if (guess.toUpperCase() === answer) {
      setStatus("won");
    }
    if(nextResults.length >= NUM_OF_GUESSES_ALLOWED && guess!== answer){
      setStatus("lost");
    }
  }

  return (
    <>
      <GuessInput handleResult={handleResult} results={results} status={status}/>
      {status !== "running" && (
        <Banner results={results} answer={answer} status={status} />
      )}
      <GuessResults results={results} answer={answer} />
    </>
  );
}

export default Game;
