//import React from 'react';

function HappyBanner({numOfGuess}) {
  //let numOfGuess = results.length > 0 && results.length + 1;

  return <div className='happy banner'>
    <p>
      <strong>Congratulations!</strong> Got it in <strong>{numOfGuess === 1 ? '1 guess' : `${numOfGuess} guesses`}</strong>.
    </p>
  </div>
}

function SadBanner({answer}) {
  return <div className="sad banner">
  <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
</div>
}

function Banner( {status, results, answer} ) {
  //console.log(results.length);
  return <>
  {status === 'won' && <HappyBanner numOfGuess={results.length}/>}
  {status === 'lost' && <SadBanner answer={answer}/>}
  </>;
}

export default Banner;
