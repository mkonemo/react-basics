import React, { useState } from 'react';

import Card from '../UI/Card';

const State = () => {
  const [variable, setVariable] = useState('Initial value');

  const clickHandler = () => {
    setVariable('Updated variable');
  };

  return (
    <div>
      <h3>State and React hooks</h3>
      <p>
        If you have a variable in your component function and the that variable
        changes, React ignores it. It doesn't care about that, that code
        executes, sure, but the overall component function doesn't execute again
        just because some variable changed.
      </p>
      <p>
        So to tell React that it should run it again, we need to import a
        function from the React library: the <strong>useState</strong> function.
        <br />
        This is a function provided by the React library, which allows us to
        define values as state, where changes to these values should reflect in
        the component function being called again, which is a key difference to
        the regular variable we're using here.
      </p>
      <p>
        <strong>
          <mark>useState is a so-called React hook.</mark>
        </strong>
      </p>
      <h4>React hooks</h4>
      <ul>
        <li>
          All React hooks can be recognized by the fact that they start with the
          word "use" in their name
        </li>
        <li>
          hooks must only be called inside of React component functions. They
          can't be called outside of these functions.
        </li>
        <li>
          And they all just shouldn't be called in any nested functions. They
          must be called directly inside such component functions.
        </li>
      </ul>
      <h4>useState</h4>
      <p>
        useState wants a default state value, because with useState we basically
        create a special kind of variable, a variable where changes will lead
        this component function to be called again. And of course we can
        therefore assign an initial value for that special variable, just as
        we're assigning a value here for this regular variable.
      </p>
      <p>
        It gives us access to this special variable. It also returns a function
        which we can then call to assign a new value to that variable. So we'll
        not be assigning values like this with the equal sign, instead, we will
        be assigning new values by calling a function.
      </p>
      <p>
        And for that useState actually returns an array, where the first value
        is the variable itself, the value itself. And the second element in the
        array is that updating function. And we can use array destructuring to
        store both elements in separate variables
      </p>
      <p>
        The first element, is a pointer at that managed value. So initially its
        the current state value, the value stored in props.variable. And the
        second element is a function for updating that.
      </p>
      <p>
        Why do we have this state updating function instead of assigning a new
        value in the classic way? The reason for that is that calling this
        function does not just assign a new value to some variable, but that
        instead it is a special variable to begin with. It's managed by React
        somewhere in memory. And when we call this state updating function, this
        special variable will not just receive a new value but, the component
        function in which you called this state updating function, and in which
        you initialized your state with useState, will be executed again.
      </p>
      <p>
        By calling this function, you're telling React that you wanna assign a
        new value to this state. And that then also tells React that the
        component in which this state was registered with useState should be
        re-evaluated. And therefore React will go ahead and execute this
        component function again, and therefore also evaluate this JSX code
        again. And then it will draw any changes which it's detects compared to
        the last time it evaluated this onto the screen.
      </p>
      <Card>
        <p>Click on button to update variable value:</p>
        <p>
          <i>{variable}</i>
        </p>
        <button onClick={clickHandler}>Click to update the state</button>
      </Card>
    </div>
  );
};
export default State;
