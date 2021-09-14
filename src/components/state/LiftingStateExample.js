import React, { useState } from 'react';
import Card from '../UI/Card';

const LiftingStateExample = (props) => {
  const [enteredText, setEnteredText] = useState('');

  const textChangeHandler = event => {
    setEnteredText(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    const userInput = {
      text: enteredText
    };
    props.onInputTextData(userInput);
    setEnteredText('');
  };

  return (
    <div>
      <Card>
        <p>In this example a <code>console.log</code> function is defined on the App component, and then passed to its child and grandchild components via props.<br /> The text is entered on the grandchild component, then passed up to the parent component and to the <em>App.js</em> component.</p>
        <p>This is the functions' flow:<br/>
        <code>App.js &gt; inputTextHandler (function) &gt; onInputText (prop) &gt;<br /> LiftingStateUp.js &gt; inputTextDataHandler (function) &gt; onInputTextData (prop) &gt;<br /> LiftingStateExample.js  </code></p>
        <p>This is the data flow:<br/>
        <code>LiftingStateExample.js &gt; props.onInputTextData(userInput); <br /> LiftingStateUp.js &gt; props.onInputText(textData) &gt; <br /> App.js (inputText)  </code></p>
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
