import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

// 1. Define the "Shape" of your props
interface GuessProps {
  value?:{value:string, id:string} | null,
  answer:string
}

type validatedValueType = {
  letter: string,
  status: 'correct' | 'misplaced' | 'incorrect' 
}

function Guess({ value, answer }: GuessProps) {

  const WORD_LENGTH = 5;
  let validatedValue: validatedValueType[] = [];

  if(value?.value) {
     validatedValue = (checkGuess(value.value, answer) ?? []) as validatedValueType[];
  }

  return (<p className='guess'>
    {range(0, WORD_LENGTH).map((num) => {
      const cell = validatedValue[num];
      return (
      <span key={num} className={cell ? `${cell.status} cell` : 'cell'}>
        { cell ? cell.letter : undefined }
      </span>);
  })}
  </p>);
}

export default Guess;
