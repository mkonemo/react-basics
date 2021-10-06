import React, { useState } from 'react';

import Button from '../UI/Button';
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
        <Button onClick={stateChangeHandler}>Change isValid</Button>
      </Card>
    </div>
  );
};

export default DynamicInlineStyles;
