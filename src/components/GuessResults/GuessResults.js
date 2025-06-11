//import React from 'react';
import Guess from  '../Guess';
import { range } from '../../utils';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants'


function GuessResults({ results, answer }) {
  return <div className='guess-results'>
    <h3>Your Guesses:</h3>
    {range(NUM_OF_GUESSES_ALLOWED).map(num => (<Guess key={num} value={results[num]} answer={answer} />))}
  </div>;
}

export default GuessResults;
