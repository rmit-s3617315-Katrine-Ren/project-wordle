//import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';


function Guess({ value, answer }) {

  const WORD_LENGTH = 5;
  let validatedValue = [];

  if(value) {
     validatedValue = checkGuess(value.value, answer);
  }

  return (<p className='guess'>
    {range(WORD_LENGTH).map((num) => (
      <span key={num} className={validatedValue.length > 0 ? `${validatedValue[num].status} cell` : 'cell'}>
        { validatedValue.length > 0 ? validatedValue[num].letter : undefined }
      </span>
    ))}
  </p>);
}

export default Guess;
