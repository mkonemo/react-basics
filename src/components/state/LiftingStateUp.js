import React, { useState } from 'react';

import Card from '../UI/Card';


const LiftingStateUp = (props) => {
  const [enteredText, setEnteredText] = useState('');

  const textChangeHandler = event => {
    setEnteredText(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    const textData = {
      text: enteredText
    };
    props.onLiftStateUp(textData);
    setEnteredText('');
  };

  return (
    <div>
      <h3>Lifting State Up</h3>
      <ul>
        <li>
          We can only communicate (pass data) from parent to child and from
          child to parent. That's why when you have to pass data between
          siblings components, you utilize the closest parent component, which
          has direct or indirect access to both involved components. For example
          the app component. Now we store our state in that closest parent
          component, which has access to both involved components by lifting our
          state up.
        </li>
        <li>
          you do that by calling a function defined in the parent component and
          passed to the child component via props, and then you pass data
          through that function. This is called <em>"Lifting State Up"</em>{' '}
        </li>
        <li>
          it is about moving data from a child component to some parent
          component to either use it there or to then pass it down to some other
          child component. And as a side note, this does not just work if you
          have the app component which interacts with two direct child
          components.
        </li>
        <li>The goal is to lift it up just as high as necessary

in your Component Tree until you have a component

which has both access to the components

that generate data as well as the components

that needs data,

that might be the app component,

but that could also be another component.</li>
      </ul>
      <br />
      <Card>
        <p>This function is defined on the App component, and then passed to this component via props.<br /> The entered text is logged into the console:</p>
        <form onSubmit={submitHandler}>
        <label>Example: </label>
          <input type="text" value={enteredText} onChange={textChangeHandler} />
          <button type="submit">Add text</button>
        </form>
      </Card>
    </div>
  );
};

export default LiftingStateUp;
