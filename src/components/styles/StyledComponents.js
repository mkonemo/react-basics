import React, {useState} from 'react';

import Card from '../UI/Card';


import './StyledComponents.css';

const StyledComponents = () => {
  const [isValid, setIsValid] = useState(true);

  const stateChangeHandler = () => {
    setIsValid(!isValid);
  };
  let variable = isValid.toString();
  return (
    <div>
      <p>
        By default, CSS files are not scoped into the app: any css added to a single component would affect all other components.
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

export default StyledComponents;
