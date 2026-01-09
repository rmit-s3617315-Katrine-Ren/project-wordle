import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { GUESS_WORD_LENGTH } from '../../constants';

// 1. Define the "Shape" of your props
interface GuessProps {
  value?:{value:string, id:string},
  answer:string
}

type validatedValueType = {
  letter: string,
  status: 'correct' | 'misplaced' | 'incorrect' 
}

function Guess({ value, answer }: GuessProps) {
  
  let validatedValue: validatedValueType[] = [];

  if(value?.value) {
     //validatedValue = (checkGuess(value.value, answer) ?? []) as validatedValueType[];
     // After typing the checkGuess() return value type to un-null value, the ?? check can be removed
     validatedValue = checkGuess(value.value, answer) as validatedValueType[];
  }

  return (<p className='guess'>
    {range(0, GUESS_WORD_LENGTH).map((num) => {
      const cell = validatedValue[num];
      return (
      <span key={num} className={cell ? `${cell.status} cell` : 'cell'}>
        { cell ? cell.letter : '' }
      </span>);
  })}
  </p>);

  
}

export default Guess;
