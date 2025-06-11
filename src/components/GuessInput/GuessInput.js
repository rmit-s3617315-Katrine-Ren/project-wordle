import React from 'react';

function GuessInput({ results, handleResult, status }) {
    const [guess, setGuess] = React.useState('');

    function handleInput(e){
      const input = e.target.value.toUpperCase();
      setGuess(input);
    }

    function handleSubmit(e){
      e.preventDefault();
      
      //console.info("guess:" + guess);

      if (results.length >= 6) {
        //console.log("Max Attempt reach! ");
        return;
      }

      handleResult(guess)

      setGuess('');
    }
  
  return (
    <>
      <form className='guess-input-wrapper'
        onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="guess-input">
          Enter Your Guess:
        </label>
        <input
          id="guess-input"
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="Please enter a 5-letter word"
          value={guess} 
          disabled={status !== 'running'}        
          onChange={event => handleInput(event)}
        />
      </form>
     
    </>
  );
}

export default GuessInput;
