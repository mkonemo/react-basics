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
      <p>
        The style of the paragraph is set depending on the value of the 
        <samp>isValid</samp> value.
      </p>
      <Card>
        <samp style={{ color: isValid ? 'olive' : 'orange' }}>
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
