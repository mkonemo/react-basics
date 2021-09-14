import React, { useState } from 'react';
import Card from '../UI/Card';

const LiftingStateExample = (props) => {
  const [enteredText, setEnteredText] = useState('');

  const textChangeHandler = event => {
    setEnteredText(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    const textInput = {
      text: enteredText
    };
    props.onInputTextData(textInput);
    setEnteredText('');
  };

  return (
    <div>
      <Card>
        <p>This function is defined on the App component, and then passed to this component via props.<br /> The entered text is logged into the console:</p>
        <form onSubmit={submitHandler}>
        <label>Example: </label>
          <input type="text" value={enteredText} onChange={textChangeHandler} />
          <button type="submit">Add text</button>
        </form>
      </Card>
    </div>
  )
}

export default LiftingStateExample;
