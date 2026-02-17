//import React from 'react';

interface BannerProps {
  status: 'won' | 'lost' | 'playing';
  results: {value:string, id:string}[];
  answer: string;
}

interface HappyBannerProps {
  numOfGuess: number;
}

function HappyBanner({numOfGuess}: HappyBannerProps) {
  return <div className='happy banner'>
    <p>
      <strong>Congratulations!</strong> Got it in <strong>{numOfGuess === 1 ? '1 guess' : `${numOfGuess} guesses`}</strong>.
    </p>
  </div>
}

interface SadBannerProps {
  answer: string;
}

function SadBanner({answer}: SadBannerProps) {
  return <div className="sad banner">
  <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
</div>
}

function Banner( {status, results, answer}: BannerProps ) {
  return <>
  {status === 'won' && <HappyBanner numOfGuess={results.length}/>}
  {status === 'lost' && <SadBanner answer={answer}/>}
  </>;
}

export default Banner;
