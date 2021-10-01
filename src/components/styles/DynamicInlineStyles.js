import React, { useState } from 'react';

import Card from '../UI/Card';

const DynamicInlineStyles = () => {
  const [isValid, setIsValid] = useState(true);

  const stateChangeHandler = () => {
    setIsValid(!isValid);
  };
  let variable = isValid.toString();
  return (
    <div>
      <Card>
        <p>
          The style of the paragraph is set depending on the value of the{' '}
          <samp>isValid</samp> value.
        </p>
        <samp style={{ color: isValid ? 'lime' : 'red' }}>
          isValid = '{variable}'
        </samp>
        <br />
        <br />
        <button onClick={stateChangeHandler}>Change isValid</button>
      </Card>
    </div>
  );
};

export default DynamicInlineStyles;
