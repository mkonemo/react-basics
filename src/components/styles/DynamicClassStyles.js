import React, { useState } from 'react';

import Card from '../UI/Card';

import './DynamicClassStyles.css';

const DynamicClassStyles = () => {
  const [isValid, setIsValid] = useState(true);

  const stateChangeHandler = () => {
    setIsValid(!isValid);
  };
  let variable = isValid.toString();
  return (
    <div>
      <p>
        The style of the paragraph is set depending on the value of the 
        <samp> isValid</samp> value, using a dynamic css class. Please note the syntax with the <em>"template literal"</em>
      </p>
      <Card>
        <samp className={`text ${!isValid ? 'invalid' : ''}`}>
          isValid = '{variable}'
        </samp>
        <br />
        <br />
        <button onClick={stateChangeHandler}>Change isValid</button>
      </Card>
    </div>
  );
};

export default DynamicClassStyles;