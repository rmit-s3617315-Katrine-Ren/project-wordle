import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Button from "../Button";

// Pick a random word on every pageload.
const answer = sample(WORDS) ?? ''; //pass as empty string to avoid type inference error, since sample can return undefined if WORDS is empty
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

interface GuessResult {
  value: string;
  id: string;
}

function Game() {
  const [results, setResults] = React.useState<GuessResult[]>([]); //or useState([] as GuessResult[]) to avoid type inference error
  const [status, setStatus] = React.useState<"running" | "won" | "lost">("running");

  function handleResult(guess:string) {
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

  function handleReset() {
    setResults([]);
    setStatus("running");
    console.log("reset game");
  }

  return (
    <>
      <GuessInput handleResult={handleResult} results={results} status={status}/>
      <Button className="button" onClick={handleReset}>Reset Game</Button>
      {status !== "running" && (
        <Banner results={results} answer={answer} status={status} />
      )}
      <GuessResults results={results} answer={answer} />
    </>
  );
}

export default Game;
